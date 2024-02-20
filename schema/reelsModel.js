"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reelsModel = new mongoose_1.Schema({
    REELS: [
        {
            reelInfo: {
                url: String,
                description: String,
                postedBy: {
                    avatar: String,
                    name: String,
                },
                likes: {
                    count: Number,
                },
                dislikes: {
                    count: Number,
                },
                comments: {
                    count: Number,
                },
                shares: {
                    count: Number,
                },
            },
        },
    ],
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Reels", reelsModel);
