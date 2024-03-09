import { Router } from "express";
import {
  createUser,
  deleteUser,
  createform,
  getusers,
  editform,
  updateUser,
} from "../controllers/user.controller.js";
const router = Router();
router.route("/users").get(getusers);
router.route("/api/create").post(createUser);
router.route("/createuser").get(createform);
router.route("/edituser/:id").get(editform);
router.route("/api/delete/:id").delete(deleteUser);
router.route("/api/updateuser/:id").patch(updateUser);

export default router;
