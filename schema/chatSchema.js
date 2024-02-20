"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chatModel = new mongoose_1.Schema({
    chatName: {
        type: String,
        trim: true,
    },
    isGroupChat: {
        type: Boolean,
        default: false,
    },
    users: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User",
        }],
    latestMessage: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Message",
    },
    groupAdmin: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    }
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Chat", chatModel);
