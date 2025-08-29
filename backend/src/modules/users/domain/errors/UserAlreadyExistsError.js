export class UserAlreadyExistsError extends Error {
  constructor(email) {
    super(`Usuário com email ${email} já existe.`);
    this.name = 'UserAlreadyExistsError';
  }
}
