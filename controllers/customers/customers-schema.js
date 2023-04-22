import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
  email: {type: String, required: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  bio: {type: String, default: ""},
  joindate: {type: String, default: Date()},
  icon: {type: String, default: "https://cdn.onlinewebfonts.com/svg/img_293923.png"},
  bg: {type: String, default: "https://i0.wp.com/arielle.com.au/wp-content/uploads/2016/04/together-we-travel-dark-1.jpg"},
  following: {type: [mongoose.Schema.Types.ObjectId], default: []},
  follower: {type: [mongoose.Schema.Types.ObjectId], default: []},
  role: {type: String, default: "customer"}
  }, 
  {collection: 'customers'}
);
export default schema;
