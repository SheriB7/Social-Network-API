const { Schema, model } = require('mongoose')
// const userSchema = mongoose.Schema({
//   firstName: String,
//   lastName: String
// });

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/]
    },


    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],

    friends:{
      firstName: String,
      lastName: String
    },

    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //   },
    // ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets and sets the user's full name
userSchema.virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })
// Setter to set the first and last name
// .set(function (v) {
//   const first = v.split(' ')[0];
//   const last = v.split(' ')[1];
//   this.set({ first, last });
// });

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;


