const { Schema, model } = require('mongoose');
// const Thought = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }
    ],
    friends: [this],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

// Virtual property for number of friends
userSchema
  .virtual('friendsCount')
  // getter
  .get(function() {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
