"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const verifyToken = (req, res, next) => {
    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.split(" ")[1];
    if (!token) {
        return res.sendStatus(401).json({ message: "No token found" }); // Unauthorized
    }
    console.log(token);
    next();
    // jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, user) => {
    //     if (err) {
    //         return res.sendStatus(403); // Forbidden
    //     }
    //     console.log(user);
    //     next();
    // });
};
exports.verifyToken = verifyToken;
