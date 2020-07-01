# Youtube Masterclass Knex.js

Video: https://youtu.be/U7GjS3FuSkA

Doc: https://www.notion.so/Masterclass-Knex-45d9705a634a4c2b80ac1599585163a6


## ❓ O que, pra que e por que?

- Query Builder
- Construtor de queries SQL com Javascript
- Callback style or Promise style
- Multiplas plataformas (PostgreSQL, MySQL, SQLite3...)
- Agilidade
- Ajuda em todos os cenários? Não , mas ainda assim você pode escrever raw queries
- SQL Raw pode ser perigoso se não for feito com cuidado, pode ser feio, e de difícil manutenção
- Knex vs SQL Raw

```sql
knex('users').where('id', 1)

select * from `users` where `id` = 1
```

## 👟 Praticar

Vamos criar uma API que irá ter CRUD de usuários e projetos desses usuários.

## Tecnologias utilizadas 

- Nodejs
- Express
- Knexjs
- SQLite3
- Nodemon

## Editor de código

- VSCode

## Software para conseguirmos testar nossas rotas

- Insomnia ou Postman

## Lógica de programação utilizada

- [x]  Revisar um pouco de SQL
- [x]  Create Table
- [x]  Instalar: `npm i knex pg express nodemon`
- [x]  Create and Config ./knexfile.js with `npx knex init`
- [x]  Create and Config ./src/database/index.js
- [x]  Create user migration  `npx knex migrate:make migration_name`
- [x]  Create user seed  `npx knex seed:make seed_name`
- [x]  Run Migration and Seeds `migrate:latest` `seed:run`
- [x]  Usando o Knex
- [x]  Select
- [x]  Insert
- [x]  Update
- [x]  Delete
- [x]  Add error handling
- [x]  Separar Rotas e criar controllers
- [x]  Create projects table (Relacionamento com users)
- [x]  Criar migration e seed
- [x]  Join User Projects
- [x]  Paginação de Projetos
- [x]  Soft Delete (user)

<h2>📱 Minhas redes sociais:</h2>

<p align="center">
   <a href="https://github.com/thallesyasmim" target="_blank" >
    <img alt="Github" src="https://img.shields.io/badge/Github--%23F8952D?style=social&logo=github"></a>
    
      
  <a href="https://www.facebook.com/thalles.gabriel.1690" target="_blank" >
    <img alt="Facebook" src="https://img.shields.io/badge/Facebook--%23F8952D?style=social&logo=facebook"></a>
    
    
  <a href="mailto:ithallesgabriel1307@gmail.com" target="_blank" >
    <img alt="Email" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail"></a> 
  
  <a href="https://api.whatsapp.com/send?phone=5511989352938" target="_blank" >
    <img alt="WhatsApp" src="https://img.shields.io/badge/Whatsapp--%23F8952D?style=social&logo=whatsapp"></a>
 </p>



<h4>Feito com ❤ por Thalles Gabriel 🔥</h4>

