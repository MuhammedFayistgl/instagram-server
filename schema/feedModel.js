"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const feedModel = new mongoose_1.Schema({
    feed: [
        {
            FEED_URL: String,
            _id: String,
            timestamp: String,
            comments: [
                {
                    user: { url: String, USER_NAME: String },
                    COMMENT: String,
                    timestamp: String,
                    replays: [
                        {
                            user: {
                                url: String,
                                USER_NAME: String,
                            },
                            REPLY: String,
                            timestamp: String,
                        },
                    ],
                },
            ],
        },
    ],
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Feed", feedModel);
