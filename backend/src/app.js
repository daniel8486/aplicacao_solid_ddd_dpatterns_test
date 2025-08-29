import fastify from 'fastify';
import helmet from 'helmet';
import cors from 'cors';
//import onHeaders from 'on-headers';
import fastifyJwt from '@fastify/jwt';
import client from 'prom-client';
import winston from 'winston';
import LokiTransport from 'winston-loki';

export const app = fastify(); 

const secret = process.env.JWT_SECRET;
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new LokiTransport({
      host: 'http://loki:3100',
      labels: { app: 'backend' }
    })
  ]
});

logger.info('Backend iniciado e log enviado para Loki!');

// Hook para logar todas as requisições
app.addHook('onRequest', (request, reply, done) => {
  logger.info(`Requisição recebida: ${request.method} ${request.url}`);
  done();
});

// Hook para logar respostas
app.addHook('onResponse', (request, reply, done) => {
  logger.info(`Resposta enviada: ${request.method} ${request.url} - Status: ${reply.statusCode}`);
  done();
});

// Tratamento de erros
app.setErrorHandler((error, request, reply) => {
  logger.error(`Erro: ${error.message} | Rota: ${request.method} ${request.url}`);
  reply.status(500).send({ error: 'Erro interno do servidor' });
});

app.register(helmet);
app.register(cors);

app.get('/metrics', async (request, reply) => {
  reply.header('Content-Type', client.register.contentType);
  reply.send(await client.register.metrics());
});

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET
});

