import { app } from './src/app.js';
import userRoutes from './src/modules/users/presentation/routes.js';
import { PrismaClient } from '@prisma/client';

app.register(userRoutes);

const prisma = new PrismaClient();

app.get('/health', async (req, reply) => {
  console.log('Recebendo requisição /health');
  try {
    await prisma.$connect();
    reply.send({ status: 'ok' });
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
    reply.code(500).send({ status: 'error', error: error.message, stack: error.stack });
  }
});

app.listen({ port: 4000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
