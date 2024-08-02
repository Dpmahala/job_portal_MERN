import bcrypt from "bcryptjs";
import { User } from "../models/users.model.js";

export const register = async () => {
    try {
        const { fullname, email, phonenumber, password, role } = req.body;
        if (!fullname || !email || !phonenumber || !password || !role) {
            return resizeBy.status(400).json({
                message: "Somthing is missing",
                success: false
            });
        };
        const user = await User.findOne({ email });
        if (User) {
            return resizeBy.status(400).json({
                message: "User already exist with this email",
                success: false,
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname, email, phonenumber, password: hashedPassword, role,
        })
    } catch (error) {

    }
}


