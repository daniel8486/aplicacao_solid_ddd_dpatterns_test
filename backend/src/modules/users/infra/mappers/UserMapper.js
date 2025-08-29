import { User } from '../../domain/entities/User.js';

export class UserMapper {
  static toDomain(prismaUser) {
    if (!prismaUser) return null;
    return new User({
      id: prismaUser.id,
      name: prismaUser.name,
      email: prismaUser.email,
      password: prismaUser.password,
    });
  }

  static toPersistence(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }
}
