import customersModel from './customers-model.js';

export const createCustomer = (jsonData) => customersModel.create(jsonData);

export const findCustomerByEmail = (email) => customersModel.findOne({email: email});
export const findCustomerByLogin = (email, password) => customersModel.findOne({email: email, password: password});
export const findCustomerById = (id) => customersModel.findOne({_id: id});

export const findCustomerFollowing = (following) => customersModel.find({_id: {$in: following}});
export const findCustomerFollower = (follower) => customersModel.find({_id: {$in: follower}});

export const updateCustomer = (id, updates) => customersModel.updateOne({_id: id}, {$set: updates});
export const updateFollowing = (id, updates) => customersModel.updateOne({_id: id}, {$set: updates});
export const updateFollower = (id, updates) => customersModel.updateOne({_id: id}, {$set: updates});

export const deleteCustomer = (id) => customersModel.deleteOne({_id: id});
