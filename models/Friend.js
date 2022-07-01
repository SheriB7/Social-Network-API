// const { Schema, Types } = require('mongoose');
// const moment = require('moment');
// const randomName = require('randomName');

// const friendSchema = new Schema(
//     {
//         friendId: {
//             type: Types.ObjectId,
//             default: () => new Types.ObjectId()
//         },
//         responseBody: {
//             type: String,
//             required: true,
//             maxlength: 280
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             //getter method for timestamp
//             get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
//         },
//     },
//     {
//         toJSON: {
//             getters: true,
//         },
//         id: false,
//     }
// );
// // const Friend = model('Friend', friendSchema);

// module.exports = friendSchema;