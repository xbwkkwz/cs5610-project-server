import mongoose from 'mongoose';
import customersSchema from './customers-schema.js';

const customersModel = mongoose.model('CustomerModel', customersSchema);
export default customersModel;
