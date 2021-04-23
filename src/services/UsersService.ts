import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";

import { UsersRepository } from "../repositories/UsersRepository";

class UsersSevice {
  private usersRepository: Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    //Verificar se o usuario existe
    const usersExists = await this.usersRepository.findOne({
      email,
    });

    if (usersExists) {
      return usersExists;
    }
    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);
    //Se nao existir, salvar no DB
    return user;
  }
}

export { UsersSevice };
