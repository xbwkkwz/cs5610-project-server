import reviewsModel from './reviews-model.js';

export const createReview = (jsonData) => reviewsModel.create(jsonData);

export const findReviewByCustomerId = (id) => reviewsModel.find({customerid: id});
export const findReviewByCustomerFollowing = (idArray) => reviewsModel.find({customerid: {$in: idArray}});
export const findReviewByMovieId = (id) => reviewsModel.find({movieid: id});
export const findReviewById = (id) => reviewsModel.findOne({_id: id});

export const updateReview = (id, updates) => reviewsModel.updateOne({_id: id}, {$set: updates});

export const deleteReview = (id) => reviewsModel.deleteOne({_id: id});
export const deleteReviewByCustomerId = (id) => reviewsModel.deleteMany({customerid: id});
