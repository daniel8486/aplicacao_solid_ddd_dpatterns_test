import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../../src/app.js';

describe('Cadastro de usuário (integração)', () => {
  it('deve cadastrar usuário via API', async () => {
    const server = app.server || app; // Fastify expõe .server quando está pronto
    const res = await request(server)
      .post('/users')
      .send({ name: 'Daniel', email: 'daniel@email.com', password: 'senha123' });
    expect(res.statusCode).toBe(201);
    expect(res.body.user.email).toBe('daniel@email.com');
  }, 10000);
});