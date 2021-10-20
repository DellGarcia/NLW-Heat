import prismaClient from "../prisma";

class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        userId: user_id
      },
      include: {
        user: true
      }
    })
  }
}

export { CreateMessageService }