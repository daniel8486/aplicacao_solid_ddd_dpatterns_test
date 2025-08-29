import fastify from 'fastify';
import helmet from 'helmet';
import cors from 'cors';
//import onHeaders from 'on-headers';
import fastifyJwt from '@fastify/jwt';

export const app = fastify(); 

const secret = process.env.JWT_SECRET

app.register(helmet);
app.register(cors);
//app.register(onHeaders);
app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET
});

