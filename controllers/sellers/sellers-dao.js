import sellersModel from './sellers-model.js';

export const createSeller = (jsonData) => sellersModel.create(jsonData);

export const findSellerByEmail = (email) => sellersModel.findOne({email: email});
export const findSellerByLogin = (email, password) => sellersModel.findOne({email: email, password: password});
export const findSellerById = (id) => sellersModel.find({_id: id});

export const updateSeller = (id, updates) => sellersModel.updateOne({_id: id}, {$set: updates});

export const deleteSeller = (id) => sellersModel.deleteOne({_id: id});
