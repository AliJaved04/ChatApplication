const mongoose = require('mongoose')

const chatModel = new mongoose.schema
    (
        {
            chatName: { type: String },
            isGroupChat: { type: Boolean },
            users: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                }
            ],
            latestMessage:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Message"
            },
            groupAdmin:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        },
        {
            timeStamp: true,
        }
    )

const Chat = mongoose.Model("Chat", chatModel);
module.exports = Chat;