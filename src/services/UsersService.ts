import { getCustomRepository } from "typeorm";

import { UsersRepository } from "../repositories/UsersRepository";

class UsersSevice {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    //Verificar se o usuario existe
    const usersExists = await usersRepository.findOne({
      email,
    });

    if (usersExists) {
      return usersExists;
    }
    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);
    //Se nao existir, salvar no DB
    return user;
  }
}

export { UsersSevice };