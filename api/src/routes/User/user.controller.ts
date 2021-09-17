import { Request, Response } from "express";
import User, { IUser } from "./User";
import jwt from "jsonwebtoken";
import config from "../../config";

function createToken(user: IUser) {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: 86400
  });
}

export const signUp = async ( req: Request, res: Response ): Promise<Response> => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ msg: "Please. Send your email and password" });
  }

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ msg: "The User already Exists" });
  }

  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).json(newUser);
};

export const signIn = async ( req: Request, res: Response ): Promise<Response> => {
  if (!req.body.email || !req.body.password) {
    console.log('Please. Send your email and password')
    return res.status(400).json({ msg: "Please. Send your email and password" });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    console.log('The User does not exists')
    return res.status(400).json({ msg: "The User does not exists" });
  } 

  const isMatch = await user.comparePassword(req.body.password);
  if (isMatch) {
    console.log(createToken(user))
    return res.status(400).json({ token: createToken(user) });
  }

  console.log('The email or password are incorrect');
  return res.status(401).json({ msg: "The email or password are incorrect" });
};

// const userFound = await User.findById(req.params.id)
// if (!userFound) return res.status(204).json()
// return res.json(userFound) 