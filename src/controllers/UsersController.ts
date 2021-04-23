import { Request, Response } from "express";
import { UsersSevice } from "../services/UsersService";

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    const usersService = new UsersSevice();

    const user = await usersService.create(email);

    return response.json(user);
  }
}

export { UsersController };