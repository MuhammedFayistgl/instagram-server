"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { Chat } from "../schema/chatModel";
const route = express_1.default.Router();
route.post("/create-single-chat", () => __awaiter(void 0, void 0, void 0, function* () {
    // const { senderId, receiverId, content, roomId } = req.body;
    // const isChat = await Chat.aggregate([
    //     {
    //         $match: {
    //             $and: [
    //                 {
    //                     senderId: {
    //                         $eq:senderId,
    //                     },
    //                 },
    //                 {
    //                     receiverId: {
    //                         $eq:receiverId,
    //                     },
    //                 },
    //             ],
    //         },
    //     }
    // ]);
    // if (isChat.length === 0) {
    //     const responseData = await new Chat({
    //         senderId,
    //         receiverId,
    //         content,
    //         roomId,
    //     }).save();
    //     console.log(responseData);
    // }
    // console.log("isChat", isChat);
    // const responseData = await new Chat({
    //     senderId, receiver, content, roomId
    // }).save();
    // console.log(responseData);
    //
    // const receiver = await userSchema.aggregate([
    //     {
    //         $match: {
    //             "user.uid": "dziW1YPO1iW0brFpoXgEa6cVLMH3",
    //         },
    //     },
    //     {
    //         $project: {
    //             receiver: "$user.uid",
    //         },
    //     },
    // ]);
    // await new chatSchema({
    //     chatName: "sender",
    //     isGroupChat: false,
    //     users:receiver
    // }).save();
    // let isChat = await chatSchema
    //     .find({
    //         isGroupChat: false,
    //         $and: [{ users: { $elemMatch: { $eq: receiverID } } }, { users: { $elemMatch: { $eq: uid } } }],
    //     })
    //     .populate("users")
    //     .populate("latestMessage");
    // isChat = await userSchema.populate(isChat, {
    //     path: "latestMessage.sender",
    //     select: " url USER_NAME uid",
    // });
    // if (isChat.length > 0) {
    //     res.send(isChat[0]);
    // } else {
    //     const chatData = {
    //         chatName: "sender",
    //         isGroupChat: false,
    //         users: [uid, receiverID],
    //     };
    //     try {
    //         const createdChat = await chatSchema.create(chatData);
    //         const FullChat = await chatSchema.findOne({ _id: createdChat._id }).populate("users");
    //         res.status(200).send(FullChat);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}));
exports.default = route;
