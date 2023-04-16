import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
  email: {type: String, required: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  bio: {type: String, default: ""},
  joindate: {type: String, default: Date()},
  icon: {type: String, default: "default-icon.jpg"},
  bg: {type: String, default: "default-background.jpg"},
  following: {type: [mongoose.Schema.Types.ObjectId], default: []},
  follower: {type: [mongoose.Schema.Types.ObjectId], default: []},
  role: {type: String, default: "customer"}
  }, 
  {collection: 'customers'}
);
export default schema;
