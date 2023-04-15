import mongoose from 'mongoose';
import sellersSchema from './sellers-schema.js';

const sellersModel = mongoose.model('SellerModel', sellersSchema);
export default sellersModel;
