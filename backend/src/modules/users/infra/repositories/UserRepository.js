export class UserRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async findByEmail(email) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async create(data) {
    return await this.prisma.user.create({ data });
  }
}
