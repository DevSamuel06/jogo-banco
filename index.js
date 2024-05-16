const { createApp } = Vue;
const API_URL = 'http://localhost:3000';

createApp({
    data() {
        return {
            hero: { life: 100, defenseMultiplier: 1 },
            enemy: { life: 100, defenseMultiplier: 1 },
            damage: 0,
            battleLog: [],
            potionAmount: 3,
            enemyPotionAmount: 3,
            winner: null,
            battleLogLimit: 3
        };
    },

    methods: {

        adicionarAoLog(mensagem) {
            if (this.battleLog.length >= this.battleLogLimit) {
                this.battleLog.shift();
            }
            this.battleLog.push(mensagem);
        },

        atacar(isHero) {
            if (isHero) {
                this.damage = Math.round(Math.random() * 20);
                this.adicionarAoLog('Cavaleiro ataca e causa ' + this.damage + ' de dano ao Dragão!');

                if (this.enemy.life > 0) {
                    this.enemy.life -= this.damage;
                    if (this.enemy.life <= 0) {
                        this.winner = 'Cavaleiro';
                        this.adicionarAoLog('O Dragão foi derrotado! Você venceu!');
                    } else {
                        this.acaoVilao();
                    }
                } else {
                    this.adicionarAoLog('O Dragão já foi derrotado!');
                }
            } else {
                this.damage = Math.round(Math.random() * 20);
                this.adicionarAoLog('Dragão ataca e causa ' + this.damage + ' de dano ao Cavaleiro!');

                if (this.hero.life > 0) {
                    this.hero.life -= this.damage * this.hero.defenseMultiplier;
                    if (this.hero.life <= 0) {
                        this.winner = 'Dragão';
                        this.adicionarAoLog('O Cavaleiro foi derrotado! Você perdeu!');
                    }
                } else {
                    this.adicionarAoLog('O Cavaleiro já foi derrotado!');
                }
            }
        },
        acaoVilao() {
            const actions = ['atacar', 'defender', 'usarPocao'];
            const randomAction = actions[Math.floor(Math.random() * actions.length)];
            console.log("Ação Dragão", randomAction);
            this[randomAction](false);
        },
        defender() {
            this.hero.defenseMultiplier = 0.5;
            this.adicionarAoLog('Cavaleiro defende!');
        },
        usarPocao(isHero) {
            if (isHero && this.potionAmount > 0 && this.hero.life < 100) {
                this.potionAmount--;
                this.hero.life += 50;
                this.hero.life = Math.min(100, this.hero.life);
                this.adicionarAoLog('Cavaleiro usa uma poção, curando 50 pontos!');
            } else if (!isHero && this.enemyPotionAmount > 0 && this.enemy.life < 100) {
                this.enemyPotionAmount--;
                this.enemy.life += 50;
                this.enemy.life = Math.min(100, this.enemy.life);
                this.adicionarAoLog('Dragão usa uma poção, curando 50 pontos!');
            } else {
                this.adicionarAoLog(isHero ? 'Cavaleiro está com a vida cheia ou sem poções!' : 'Dragão está com a vida cheia ou sem poções!');
            }
        },
        correr() {
            this.adicionarAoLog('Cavaleiro foge!');
            this.winner = 'Dragão';
        },
        reiniciarJogo() {
            this.hero.life = 100;
            this.enemy.life = 100;
            this.potionAmount = 3;
            this.enemyPotionAmount = 3;
            this.winner = null;
            this.battleLog = [];
        },

        getHealthBarClass(character) {
            console.log("Vida do personagem:", character.life);
            if (character.life <= 0) {
                return 'health-bar dead';
            } else if (character.life <= 45) {
                console.log("Vida do personagem é menor ou igual a 45");
                return 'health-bar red';
            } else if (character.life <= 70) {
                console.log("Vida do personagem é menor ou igual a 70");
                return 'health-bar yellow';
            } else {
                console.log("Vida do personagem é maior que 70");
                return 'health-bar green';
            }
        }


    },
    computed: {
        isGameOver() {
            return this.hero.life <= 0 || this.enemy.life <= 0 || this.winner;
        },
    },


    async atualizarVidaNoBancoDeDados(vidaHeroi, vidaVilao) {
        try {
            const response = await fetch(`${API_URL}/atualizarVida`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ vidaHeroi, vidaVilao })
            });
            if (!response.ok) {
                throw new Error('Erro ao atualizar a vida no banco de dados.');
            }
            console.log('Vida do herói e do vilão atualizada com sucesso.');
        } catch (error) {
            console.error('Erro ao atualizar a vida no banco de dados:', error);
        }
    },

}).mount("#app");
