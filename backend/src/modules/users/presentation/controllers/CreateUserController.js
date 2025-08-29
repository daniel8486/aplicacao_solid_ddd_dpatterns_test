import { createUserSchema } from '../schemas/createUserSchema.js';
import { CreateUserUseCase } from '../../application/CreateUserUseCase.js';
import { UserRepository } from '../../infra/repositories/UserRepository.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const userRepository = new UserRepository(prisma);
const createUserUseCase = new CreateUserUseCase(userRepository);

export async function createUserController(request, reply) {
console.log('Creating user...');
  try {
    const data = createUserSchema.parse(request.body);
    const user = await createUserUseCase.execute(data);
    reply.code(201).send({ user });
  } catch (error) {
    if (error.name === 'UserAlreadyExistsError') {
      reply.code(409).send({ error: error.message });
    } else if (error.name === 'ZodError') {
      reply.code(400).send({ error: error.errors });
    } else {
      reply.code(500).send({ error: 'Erro interno do servidor.' });
    }
  }
}
