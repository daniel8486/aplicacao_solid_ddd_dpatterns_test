import { describe, it, expect, vi } from 'vitest';
import { User } from '../../src/modules/users/domain/entities/User.js';

describe('User Entity', () => {
  it('deve criar um usuário válido', () => {
    const user = new User({
      id: 1,
      name: 'Daniel',
      email: 'daniel@email.com',
      password: 'senha123'
    });
    expect(user).toBeInstanceOf(User);
    expect(user.email).toBe('daniel@email.com');
  });
});
