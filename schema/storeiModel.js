"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const storeiModel = new mongoose_1.Schema({
    STORY: [
        {
            url: String,
            duration: Number,
            seeMore: String,
            _id: mongoose_1.Schema.ObjectId,
            header: {
                heading: String,
                subheading: String,
                profileImage: String,
            },
        },
    ],
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Stories", storeiModel);
