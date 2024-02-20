"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Schema
const UserSchema = new mongoose_1.Schema({
    user: {
        url: {
            type: String,
            default: "",
        },
        USER_NAME: {
            type: String,
            default: "",
        },
        uid: {
            type: String,
            default: "",
        },
        Followers: {
            type: Number,
            default: 0,
        },
        Following: {
            type: Number,
            default: 0,
        },
        description: {
            type: String,
            default: "",
        },
    },
    STORY: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Stories",
    },
    feed: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Feed",
    },
    REELS: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Reels",
    },
}, { timestamps: true });
// Default export
exports.default = (0, mongoose_1.model)("User", UserSchema);
