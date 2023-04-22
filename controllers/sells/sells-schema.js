import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
  sellerid: {type: String, required: true},
  movieid: {type: String, required: true},
  price: {type: Number, required: true},
  time: {type: Date, default: new Date()},
  format: {type: String, default: "Digital"}
  }, 
  {collection: 'sells'}
);
export default schema;
