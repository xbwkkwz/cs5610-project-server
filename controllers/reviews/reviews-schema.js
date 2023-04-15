import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
  customerid: {type: String, required: true},
  movieid: {type: String, required: true},
  content: {type: String, required: true},
  time: {type: Date, default: new Date()},
  rating: {type: Number, default: 5}
  }, 
  {collection: 'reviews'}
);
export default schema;
