import jwt from "jsonwebtoken";
import 'dotenv/config'

export function verifyToken(req, res, next) {
  const header = req.header("Authorization") || "";
  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not provied" });
  }
  try {
    const payload = jwtVerify(token);
    console.log({payload})
    req.username = payload.username;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Token not valid" });
  }
}

export function jwtSign(payload) {
    const secret = process.env.SECRET_KEY;
    const token = jwt.sign({ username: payload }, secret, { expiresIn: process.env.EXP_TOKEN });
    return token;
}

export function jwtSignR(payload) {
  const secret = process.env.SECRET_KEYR;
  const token = jwt.sign({ username: payload }, secret, {
    expiresIn: process.env.EXP_TOKENR,
  });
  return token;
}

export function jwtVerify(token) {
  const secret = process.env.SECRET_KEY; //Verifica el access token
    return jwt.verify(token,secret);
}

export function jwtVerifyR(token) {
  const secret = process.env.SECRET_KEYR; //Verifica el access token
  return jwt.verify(token, secret);
}