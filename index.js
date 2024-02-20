"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const server_1 = require("./config/server");
const userRoute_1 = __importDefault(require("./router/userRoute"));
const chatRoute_1 = __importDefault(require("./router/chatRoute"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const node_http_1 = require("node:http");
require("dotenv/config");
const socket_io_1 = require("socket.io");
// import { Chat } from "./schema/chatModel";
// import { verifyToken } from "./Middleware/authMiddleware";
const app = (0, express_1.default)();
const server = (0, node_http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true,
    },
});
app.use((0, cors_1.default)({ credentials: true, origin: ["http://localhost:5173", "https://muhammedfayistgl.github.io"] }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.use(verifyToken); //middleware
app.get("/", (req, res) => {
    res.send("Hello, TypeScript Express!");
});
io.on("connection", () => {
    console.log("New client connected");
    // socket.on("send-message", async (data) => {
    //     const { senderId, receiverId, content, roomId } = data;
    //     socket.join(roomId);
    //     const isChat = await Chat.aggregate([
    //         {
    //             $match: {
    //                 $and: [
    //                     {
    //                         senderId: {
    //                             $eq: senderId,
    //                         },
    //                     },
    //                     {
    //                         receiverId: {
    //                             $eq: receiverId,
    //                         },
    //                     },
    //                 ],
    //             },
    //         },
    //     ]);
    //     console.log(data);
    //     socket.to(isChat[0].roomId).emit("reply-message", content);
    // });
});
//  Routs
app.use("/v1", userRoute_1.default);
app.use("/v1", chatRoute_1.default);
(0, server_1.connectDB)();
server.listen(1010, () => {
    console.log("Server started");
});
