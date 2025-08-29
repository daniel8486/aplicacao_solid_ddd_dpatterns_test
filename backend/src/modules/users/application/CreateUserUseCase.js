import { UserAlreadyExistsError } from '../domain/errors/UserAlreadyExistsError.js';
import { UserMapper } from '../infra/mappers/UserMapper.js';

export class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new UserAlreadyExistsError(email);
    }
    const user = await this.userRepository.create({ name, email, password });
    return UserMapper.toDomain(user);
  }
}
