import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const signup = async (req, res, next) => {
    try {
        const oldUser = await User.findOne({ email: req.body.email });
        if (oldUser) {
            return next(createError(400, "User already exists"));
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({ ...req.body, password: hash });

        const savedUser = await newUser.save();

        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
        const { password, ...others } = savedUser._doc;

        res.cookie("access_token", token, {
            secure: true,
            httpOnly: true,
            sameSite: "none",
        })
            .status(200)
            .json(others);
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    // console.log(req.body);
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(createError(404, "User Not Found"));

        const isCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isCorrect) return next(createError(400, "Wrong Credentials"));

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password, ...others } = user._doc;

        res.cookie("access_token", token, {
            secure: true,
            httpOnly: true,
            sameSite: "none",
        })
            .status(200)
            .json(others);
    } catch (error) {
        next(error);
    }
};
