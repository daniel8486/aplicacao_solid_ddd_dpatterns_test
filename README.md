# Estudo API JS aplicando SOLID, PATTERNS ,TEST e OBSERVABILIDADE.

Projeto utilizando Docker, Node.js, Fastfy, Prisma, Zod, Grafana, Prometheus, Promtail e mais.  

Lembrando que os princípios SOLID são aplicados de forma adaptativa, pois JavaScript é uma linguagem dinâmica. 

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
