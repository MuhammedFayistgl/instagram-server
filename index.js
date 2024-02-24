import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/server.js";
import Route from "./router/userRoute.js";
import ChatRoute from "./router/chatRoute.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import "dotenv/config";
// import { Server } from "socket.io";
// import { Chat } from "./schema/chatModel";
// import { verifyToken } from "./Middleware/authMiddleware";
const app = express();

// const io = new Server(server, {
// cors: {
// origin:[ "http://localhost:5173", "https://muhammedfayistgl.github.io",'https://instagram-server-jyei.onrender.com/'],
// credentials: true,
// },
// });
// 
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.use(cors({ credentials: true, origin: [ "https://muhammedfayistgl.github.io","http://localhost:5173"] }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(verifyToken); //middleware

app.get("/", (req, res) => {
    res.send("Hello, TypeScript Express!");
});
// io.on("connection", () => {
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
// });
//  Routs
app.use("/v1", Route);
app.use("/v1", ChatRoute);
connectDB();

app.listen(1010, () => {
    console.log("Server started");
});
