"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const mongoose_1 = require("mongoose");
const chatModel = new mongoose_1.Schema({
    id: { type: mongoose_1.Schema.Types.ObjectId },
    senderId: String,
    receiverId: String,
    roomId: String,
}, {
    timestamps: true,
});
exports.Chat = (0, mongoose_1.model)("chats", chatModel);
