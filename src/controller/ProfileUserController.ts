import { Request, Response } from "express"
import { ProfileuserService } from "../services/ProfileUserService";

class ProfileUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const service = new ProfileuserService();

    const result = await service.execute(user_id);

    return response.json(result);
  }
}

export { ProfileUserController }