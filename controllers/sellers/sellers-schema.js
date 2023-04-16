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
  address: {type: String, default: ""},
  website: {type: String, default: ""},
  businesshour: {type: String, default: ""},
  role: {type: String, default: "seller"}
  }, 
  {collection: 'sellers'}
);
export default schema;
