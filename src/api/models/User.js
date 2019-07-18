import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})

export default mongoose.model('User', UserSchema, 'Users', true);