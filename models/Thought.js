const { Schema, model } = require('mongoose');
const Response = require('./Response');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      // match: "regex need 1 to 280 characters"
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      //current time
      default: Date.now,
      //getter method for timestamp 
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
    
});

// Create a virtual property `responses` that gets the amount of response per thought
thoughtSchema.virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
