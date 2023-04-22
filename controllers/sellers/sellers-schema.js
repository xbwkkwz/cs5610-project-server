import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
  email: {type: String, required: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  bio: {type: String, default: ""},
  joindate: {type: String, default: Date()},
  icon: {type: String, default: "https://static.vecteezy.com/system/resources/previews/000/583/708/original/online-shop-icon-vector.jpg"},
  bg: {type: String, default: "https://i0.wp.com/arielle.com.au/wp-content/uploads/2016/04/together-we-travel-dark-1.jpg"},
  address: {type: String, default: ""},
  website: {type: String, default: ""},
  businesshour: {type: String, default: ""},
  role: {type: String, default: "seller"}
  }, 
  {collection: 'sellers'}
);
export default schema;
