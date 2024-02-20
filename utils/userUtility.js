"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUID = exports.getcookie = void 0;
const getcookie = (req) => {
    const cookie = req.headers.cookie;
    // user=someone; session=mySessionID
    return cookie === null || cookie === void 0 ? void 0 : cookie.split("; ");
};
exports.getcookie = getcookie;
const getUID = (req, res) => {
    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.split(" ")[1];
    if (!token) {
        return res.sendStatus(401).json({ message: "No token found" }); // Unauthorized
    }
    return token;
};
exports.getUID = getUID;
