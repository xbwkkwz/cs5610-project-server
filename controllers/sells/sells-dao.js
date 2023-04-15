import sellsModel from './sells-model.js';

export const createSell = (jsonData) => sellsModel.create(jsonData);

export const findSellBySellerId = (id) => sellsModel.find({sellerid: id});
export const findSellByMovieId = (id) => sellsModel.find({movieid: id});

export const updateSell = (id, updates) => sellsModel.updateOne({_id: id}, {$set: updates});

export const deleteSell = (id) => sellsModel.deleteOne({_id: id});
export const deleteSellBySellerId = (id) => sellsModel.deleteMany({sellerid: id});
