# Estudo API JS aplicando SOLID, PATTERNS e TEST

Projeto utilizando Docker, Node.js, Fastfiy, Prisma, Zod.

Lembrando que os princípios SOLID será aplicada de forma adaptativa, pois o JS é dinâmica. 

## Pré-requisitos 

- Docker e Docker compose instalados 
- Node.js (v22+)
- npm 

## Rodar Prisma 

```sh 
   npx prisma generate --schema=./backend/prisma/schema.prisma
``` 

## Primeira Rota

http://localhost:4000/users 

{
  "name": "Usuário Teste 1",
  "email": "teste1@user.com.br",
  "password": "testeUser123"
}
