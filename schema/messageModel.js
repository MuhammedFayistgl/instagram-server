"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageModel = new mongoose_1.Schema({
    roomId: String,
    chats: [{
            type: mongoose_1.Schema.Types.ObjectId,
            senderTex: String,
            receiverTex: String,
        }]
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Message", messageModel);
