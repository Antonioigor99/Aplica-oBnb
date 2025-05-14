import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();
router.get("/", async (req, res) => {
  connectDb();

  try {
    const userDoc = await User.find();
    res.json({ message: "servidor funcionou", users: userDoc });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  connectDb();
  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);
  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.json({ message: "servidor funcionou", user: newUserDoc });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
