import { Router } from "express";

import { AuthValidation } from "./auth.validation";
import validateRequest from "../../../middlewares/validateRequest";
import { userValidation } from "../user/user.validation";
import { AuthControllers } from "./auth.controller";

const authRouter = Router();

authRouter.post('/register', validateRequest(userValidation.userValidationSchema), AuthControllers.register);
authRouter.post('/login', validateRequest(AuthValidation.loginValidationSchema), AuthControllers.login);



export default authRouter;