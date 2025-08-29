import { describe, it, expect, vi } from 'vitest';
import { CreateUserUseCase } from '../../src/modules/users/application/CreateUserUseCase.js';
import { UserRepository } from '../../src/modules/users/infra/repositories/UserRepository.js';

const mockRepo = {
  findByEmail: vi.fn(),
  create: vi.fn()
};

describe('CreateUserUseCase', () => {
  it('deve cadastrar usuário se email não existir', async () => {
    mockRepo.findByEmail.mockResolvedValue(null);
    mockRepo.create.mockResolvedValue({ id: 1, name: 'Daniel', email: 'daniel@email.com', password: 'senha123' });
    const useCase = new CreateUserUseCase(mockRepo);
    const user = await useCase.execute({ name: 'Daniel', email: 'daniel@email.com', password: 'senha123' });
    expect(user.email).toBe('daniel@email.com');
  });

  it('deve lançar erro se email já existir', async () => {
    mockRepo.findByEmail.mockResolvedValue({ id: 1, email: 'daniel@email.com' });
    const useCase = new CreateUserUseCase(mockRepo);
    await expect(useCase.execute({ name: 'Daniel', email: 'daniel@email.com', password: 'senha123' }))
      .rejects.toThrow('Usuário com email daniel@email.com já existe.');
  });
});
