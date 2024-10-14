import express from 'express';
import { jwtSign, jwtSignR, jwtVerifyR } from '../utils/jwt.js';

const routes = express.Router();

routes.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }
        if (username === 'admin' && password === 'admin') {
            const token = jwtSign(username);
            const tokenR = jwtSignR(username);
            return res.status(200).json({ token, tokenR });
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal server error" });
    }
});

routes.post('/refresh', (req, res) => {
    try {
        const header = req.header("Authorization") || "";
        const token = header.split(" ")[1];
        const decoded = jwtVerifyR(token); //exception
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }
        const newToken = jwtSign(decoded.username);
        return res.status(200).json({ token: newToken });
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
});
export default routes;