import mongoose from 'mongoose';
import sellsSchema from './sells-schema.js';

const sellsModel = mongoose.model('SellModel', sellsSchema);
export default sellsModel;
