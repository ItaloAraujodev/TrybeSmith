import { Request, Response } from 'express';
import UsersService from '../services/users.service';

class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  create = async (req: Request, res: Response) => {
    console.log(req.body);
    const token = await this.usersService.create(req.body);
    return res.status(201).json({ token });
  }
  ;
}

export default UsersController;
