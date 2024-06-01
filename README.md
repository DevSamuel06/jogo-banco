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
