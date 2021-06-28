<p align="center" >
<img src="https://i.imgur.com/SbhNaFr.png" />
</p>
<h1 align="center">NLW - Valoriza</h1>

Aqui você irá encontrar o código do NLW Valoriza desenvolvido na trilha de NodeJS durante o [NLW Together](https://nextlevelweek.com/) da incrível professora [Dani Leao](https://github.com/danileao).

## 💻 Tecnologias usadas
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)

## 📏 Regras de Negócio

- Cadastro de usuário

  [ X ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ X ] Não é permitido cadastrar usuário sem e-mail


- Cadastro de TAG

  [ X ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ X ] Não é permitido cadastrar tag sem nome

  [ X ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ X ] Não é permitido um usuário cadastrar um elogio para si

  [ X ] Não e permitido cadastrar elogios para usuário inválidos

  [ X ] O usuário precisa estar autenticado na aplicação

## ⚙️ Configuração

Para a aplicação iniciar, você terá que configurar o banco de dados no `ormconfig.json`, se você não sabe sobre isso, dê uma olhada no [Quick Start](https://typeorm.io/#/) do TypeORM!

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3333`

## 📝 Contato

Se você tiver alguma dúvida ou problema abra uma issue no repositório ou me contate pelo e-mail: leonardoeverton.tec@gmail.com