# Batalha Herói vs Vilão

## Descrição do Projeto

O projeto "Batalha Herói vs Vilão" é um jogo simples baseado na web, onde um jogador controla um herói em uma batalha contra um vilão. O jogo é desenvolvido utilizando Vue.js para o frontend e Express.js para o backend, com um banco de dados SQL Server para armazenamento de dados.

Os jogadores podem atacar, defender, usar poções e tentar fugir da batalha. O estado do jogo e os logs de batalha são armazenados no banco de dados e exibidos em tempo real.

## Tecnologias Utilizadas

- **Frontend:** Vue.js
- **Backend:** Express.js, Node.js
- **Banco de Dados:** SQL Server
- **Outras Bibliotecas:** bcrypt, jsonwebtoken, mssql
- **Ferramentas:** npm

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 12 ou superior)
- SQL Server

### Configuração do Banco de Dados

1. Crie um banco de dados no SQL Server.
2. Execute o seguinte script SQL para criar as tabelas necessárias:

```sql
CREATE TABLE Usuarios (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nome VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Idade INT NOT NULL,
    Senha VARCHAR(255) NOT NULL
);

CREATE TABLE battle_log (
    Id INT PRIMARY KEY IDENTITY(1,1),
    mensagem NVARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT GETDATE()
);

CREATE TABLE Personagens (
    Nome VARCHAR(255) PRIMARY KEY,
    Vida INT NOT NULL
);
```
### Instalação do Backend
1. Clone o repositório:
```
git clone https://github.com/seu-usuario/batalha-heroi-vilao.git
```
2. Navegue até o diretório do projeto:
```
cd batalha-heroi-vilao
```
3. Instale as dependências:
```
npm install
```
4. Crie um arquivo config.js no diretório raiz do projeto com as credenciais do seu banco de dados:
```
const config = {
    user: 'seu-usuario',
    password: 'sua-senha',
    server: 'seu-servidor.database.windows.net',
    database: 'seu-banco-de-dados',
    options: {
        encrypt: true
    }
};
module.exports = config;
```
5. Inicie o servidor:
```
node server.js
```
### Instalação do Frontend
1. Navegue até o diretório do frontend:
```
cd frontend
```
Instale as dependências:
```
npm install
```
Inicie o servidor de desenvolvimento:
```
npm run serve
```
### Utilização
Acesse o jogo em http://localhost:8080
Use o dashboard para visualizar os logs de batalha em http://localhost:8080/dashboard
### Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

# Aplicação

# Backend para salvar e consultar dados no banco de dados:
![Captura de tela 2024-06-01 124343](https://github.com/DevSamuel06/jogo-banco/assets/124092317/7e62d71f-6a1e-4337-a5b8-21e71356a4eb)
![Captura de tela 2024-06-01 124352](https://github.com/DevSamuel06/jogo-banco/assets/124092317/7ecfa543-c4ac-4c1c-8a3c-f211b996ac78)

## Sistema de login:
![Captura de tela 2024-06-01 124420](https://github.com/DevSamuel06/jogo-banco/assets/124092317/9a0d182c-4015-45df-903e-1b2cfd16e857)
![Captura de tela 2024-06-01 124429](https://github.com/DevSamuel06/jogo-banco/assets/124092317/3ba0f042-650e-4f83-aa82-f29a5ea25083)

## Salva os dados do jogo em tempo real:
![Captura de tela 2024-06-01 124438](https://github.com/DevSamuel06/jogo-banco/assets/124092317/62935d4b-c8ef-46cb-8d5c-f2300e8a82f3)
![Captura de tela 2024-06-01 124452](https://github.com/DevSamuel06/jogo-banco/assets/124092317/bd312385-efd9-4c4e-a583-8803d4bfbae4)

## Constrói o jogo :
![Captura de tela 2024-06-01 124509](https://github.com/DevSamuel06/jogo-banco/assets/124092317/f34b5bee-929f-456e-8ac5-a6148b939bb4)

# Demonstração da aplicação em funcionamento:

[![Assista ao vídeo](https://youtu.be/gjdVGzzhOTY)









