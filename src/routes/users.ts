import { Router, Request, Response, NextFunction } from "express";
import { UserService } from "../services/userService";

const router = Router();
const userService = new UserService();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
