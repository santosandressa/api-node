import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
  admin_id: string;
  text: string;
  user_id: string;
}

class MessagesService {
  async create({ admin_id, text, user_id }) {
    const messagesRepository = getCustomRepository(MessagesRepository);

   const messages = messagesRepository.create({
      admin_id,
      text,
      user_id,
    });

    await messagesRepository.save(messages)

    return messages;
  }
}

export { MessagesService };
