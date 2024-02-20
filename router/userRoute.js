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
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = require("express");
const userSchema_1 = __importDefault(require("../schema/userSchema"));
const mongoose_1 = __importDefault(require("mongoose"));
const moment_1 = __importDefault(require("moment"));
const userUtility_1 = require("../utils/userUtility");
const Route = (0, express_1.Router)();
Route.get("/", (req, res) => {
    res.send("What's up doc ?!");
});
Route.get("/all-data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield userSchema_1.default.find();
    res.send(allData).json();
}));
Route.post("/upload", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = {
    //     user: {
    //         url: "https://picsum.photos/500/700",
    //         USER_NAME: "y_as_er_T_U..",
    //     },
    //     STORY: [
    //         {
    //             url: "https://picsum.photos/500/700",
    //             duration: 5000,
    //             seeMore: "seeMore",
    //             header: {
    //                 heading: "y_as_er_T_U..",
    //                 subheading: "Posted 30m ago",
    //                 profileImage: "https://picsum.photos/50/50",
    //             },
    //         },
    //         {
    //             url: "https://picsum.photos/500/700",
    //             duration: 5000,
    //             seeMore: "seeMore",
    //             header: {
    //                 heading: "Monit Karekar",
    //                 subheading: "Posted 30m ago",
    //                 profileImage: "https://picsum.photos/50/50",
    //             },
    //         },
    //     ],
    //     feed: [
    //         {
    //             FEED_URL: "https://picsum.photos/200/300",
    //             timestamp: Date.now(),
    //             comments: [
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             FEED_URL: "https://picsum.photos/200/300",
    //             timestamp: Date.now(),
    //             comments: [
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             FEED_URL: "https://picsum.photos/200/300",
    //             timestamp: Date.now(),
    //             comments: [
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             FEED_URL: "https://picsum.photos/200/300",
    //             timestamp: Date.now(),
    //             comments: [
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     user: {
    //                         url: "https://picsum.photos/500/700",
    //                         USER_NAME: "y_as_er_T_U..",
    //                     },
    //                     COMMENT:
    //                         "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
    //                     timestamp: Date.now(),
    //                     replays: [
    //                         {
    //                             user: {
    //                                 url: "https://picsum.photos/500/700",
    //                                 USER_NAME: "y_as_er_T_U..",
    //                             },
    //                             REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
    //                             timestamp: Date.now(),
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //     ],
    //     REELS: [
    //         {
    //             reelInfo: {
    //                 url: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    //                 description: "this is tha best reels",
    //                 postedBy: {
    //                     avatar: "https://picsum.photos/200/300",
    //                     name: "y_as_er_T_U..",
    //                 },
    //                 likes: {
    //                     count: 55,
    //                 },
    //                 dislikes: {
    //                     count: 5,
    //                 },
    //                 comments: {
    //                     count: 22,
    //                 },
    //                 shares: {
    //                     count: 55,
    //                 },
    //             },
    //         },
    //     ],
    // };
    const data = [
        {
            user: {
                USER_NAME: "fayis__elm",
                uid: "dziW1YPO1iW0brFpoXgEa6cVLMH3",
                Followers: "500",
                Following: "600",
                description: "fullstack developer",
                url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
            },
            STORY: [
                {
                    header: {
                        heading: "y_as_er_T_U..",
                        subheading: "Posted 30m ago",
                        profileImage: "https://picsum.photos/50/50",
                    },
                    url: "https://picsum.photos/500/700",
                    duration: 5000,
                    seeMore: "seeMore",
                },
                {
                    header: {
                        heading: "Mohit Karekar",
                        subheading: "Posted 30m ago",
                        profileImage: "https://picsum.photos/50/50",
                    },
                    url: "https://picsum.photos/500/700",
                    duration: 5000,
                    seeMore: "seeMore",
                },
            ],
            feed: [
                {
                    FEED_URL: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
                    comments: [
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                    ],
                    Like: [""],
                },
                {
                    FEED_URL: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
                    comments: [
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            timestamp: "1699430228768",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                    ],
                    Like: [""],
                },
                {
                    FEED_URL: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
                    timestamp: "1699430228768",
                    comments: [
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            timestamp: "1699430228768",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                    ],
                    Like: [""],
                },
                {
                    FEED_URL: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
                    comments: [
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                    _id: "654b3f54090f8f1f2ffe2fa5",
                                },
                            ],
                        },
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                        {
                            user: {
                                url: "https://picsum.photos/500/700",
                                USER_NAME: "y_as_er_T_U..",
                            },
                            COMMENT: "orem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligendi, esse exercitationem aliquid possimus quod dignissimos? Delectus dolore ",
                            replays: [
                                {
                                    user: {
                                        url: "https://picsum.photos/500/700",
                                        USER_NAME: "y_as_er_T_U..",
                                    },
                                    REPLY: " ipsum dolor sit amet consectetur adipisicing elit. Ut rerum id, cum atque quibusdam debitis officiis eligend ",
                                },
                            ],
                        },
                    ],
                    Like: [""],
                },
            ],
            REELS: [
                {
                    reelInfo: {
                        postedBy: {
                            avatar: "https://picsum.photos/200/300",
                            name: "y_as_er_T_U..",
                        },
                        likes: {
                            count: 55,
                        },
                        dislikes: {
                            count: 5,
                        },
                        comments: {
                            count: 22,
                        },
                        shares: {
                            count: 55,
                        },
                        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                        description: "this is tha best reels",
                    },
                    _id: "654b3f54090f8f1f2ffe2faa",
                },
            ],
        },
    ];
    const DBdata = yield userSchema_1.default.insertMany(data);
    res.send(DBdata);
}));
Route.get("/instagram-random-feed", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userSchema_1.default
        .aggregate([
        {
            $project: {
                feed: "$feed",
                user: "$user",
                _id: 0,
            },
        },
    ])
        .then((array) => res.send(array));
}));
Route.get("/instagram-random-story", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userSchema_1.default
        .aggregate([
        {
            $project: {
                header: {
                    heading: "$user.USER_NAME",
                    subheading: (0, moment_1.default)(new Date()).fromNow(),
                    profileImage: "$user.url",
                },
                url: "$Stories",
                duration: "$STORY.duration",
                seeMore: "seeMore",
                _id: new mongoose_1.default.Types.ObjectId(),
            },
        },
    ])
        .then((array) => res.send(array));
}));
Route.get("/instagram-random-story-only-status-view", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const array = yield userSchema_1.default.aggregate([
            {
                $project: {
                    name: "$user.USER_NAME",
                    uid: "$user.uid",
                    url: "$user.url",
                    _id: "$_id",
                },
            },
        ]);
        res.send(array);
    }
    catch (error) {
        console.log(error);
    }
}));
Route.post("/instagram-random-story-only-status-with-id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const array = yield userSchema_1.default.aggregate([
        {
            $match: {
                "user.uid": id,
            },
        },
        {
            $project: {
                header: {
                    heading: "$user.USER_NAME",
                    subheading: (0, moment_1.default)(new Date()).fromNow(),
                    profileImage: "$user.url",
                },
                url: "$Stories",
                duration: "$STORY.duration",
                seeMore: "seeMore",
                _id: new mongoose_1.default.Types.ObjectId(),
            },
        },
    ]);
    res.send(array);
}));
Route.get("/instagram-random-reel", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const instaRandomFeed = yield userSchema_1.default.find();
    const REELS = instaRandomFeed.filter((feed) => feed.REELS);
    res.send(REELS);
}));
Route.get("/instagram-user-on-feeds", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenHeader = req.headers["authorization"];
    const uid = tokenHeader && tokenHeader.split(" ")[1];
    if (!uid)
        return res.sendStatus(401).json("uid not found");
    try {
        const userinformation = yield userSchema_1.default.aggregate([
            {
                $match: {
                    "user.uid": uid,
                },
            },
            {
                $project: {
                    feeds: "$feed.FEED_URL",
                    _id: 0,
                },
            },
        ]);
        const data = userinformation.map((data) => data.feeds).flat(1);
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
}));
Route.get("/instagram-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenHeader = req.headers["authorization"];
    const uid = tokenHeader && tokenHeader.split(" ")[1];
    if (!uid)
        return res.sendStatus(401).json("uid not found");
    const user = yield userSchema_1.default.aggregate([
        {
            $match: {
                "user.uid": uid,
            },
        },
        {
            $project: {
                user: "$user",
            },
        },
    ]);
    res.send(user);
}));
//  post
Route.post("/create-User-with-userName", (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid, UserName } = req.body;
    yield userSchema_1.default.findOneAndUpdate({
        user: {
            USER_NAME: UserName,
            uid: uid,
        },
    });
}));
Route.post("/instagram-user-like", (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid, targetID } = req.body;
    const TargetLikeObj = yield userSchema_1.default.aggregate([
        {
            $match: {
                "user.uid": uid,
            },
        },
        {
            $unwind: "$feed",
        },
        {
            $match: {
                "feed._id": targetID,
            },
        },
        {
            $addFields: {
                "feed.Like": {
                    $add: ["$feed.Like", +1],
                },
            },
        },
    ]);
    console.log("Unlike, targetID", uid, targetID);
    console.log("TargetLikeObj", TargetLikeObj);
}));
Route.post("/instagram-user-Unlike", 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
(req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { Like, targetID } = req.body;
    // const countLike = await userSchema.findOneAndUpdate(
    //     {
    //         feed: [{ _id: { $eq: targetID } }],
    //     },
    //     { $inc: {"Like": -1 } },
    //     { upsert: true, new: true }
    // { "feed._id": { $eq: targetID } },
    // { $inc: { "Like": -1 } },
    // );
    // console.log("Unlike, targetID", Like, targetID);
    // console.log("countUnlike", countLike);
}));
Route.get("/get-my-username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenHeader = req.headers["authorization"];
    const uid = tokenHeader && tokenHeader.split(" ")[1];
    if (!uid)
        return res.sendStatus(401).json("uid not found");
    const userName = yield userSchema_1.default
        .findOne({
        "user.uid": { $in: uid },
    })
        .then((doc) => { var _a; return (_a = doc === null || doc === void 0 ? void 0 : doc.user) === null || _a === void 0 ? void 0 : _a.USER_NAME; });
    res.send(userName);
}));
Route.post("/get-users-chat", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uid = (0, userUtility_1.getUID)(req, res);
    if (!uid)
        return res.sendStatus(401).json("uid not found");
    const users = yield userSchema_1.default.aggregate([
        {
            $match: {
                "user.uid": {
                    $ne: uid,
                },
            },
        },
        {
            $project: {
                _id: 0,
                user: "$user",
            },
        },
    ]);
    res.send(users);
}));
exports.default = Route;
