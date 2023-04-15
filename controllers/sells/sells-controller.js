import * as sellsDao from './sells-dao.js';

// now it's asynchronous function
const createSell = async (req, res) => {
  // all files will be passed to the json
  const newData = req.body;
  const sell = await sellsDao.createSell(newData);
  res.json(sell);
}

const findSellBySellerId = async (req, res) => {
  const id = req.params['id'];
  const sells = await sellsDao.findSellBySellerId(id);
  // could return empty array
  if (sells) res.json(sells);
  else res.json([]);
}

const findSellByMovieId = async (req, res) => {
  const id = req.params['mid'];
  const sells = await sellsDao.findSellByMovieId(id);
  // could return empty array
  if (sells) res.json(sells);
  else res.json([]);
}

const updateSell = async (req, res) => {
  const id = req.params['sid'];
  const updates = req.body;
  const status = await sellsDao.updateSell(id, updates);
  res.json(status);
}

const deleteSell = async (req, res) => {
  const id = req.params['sid'];
  const status = await sellsDao.deleteSell(id);
  // res.sendStatus(200);
  res.json(status);
}

const deleteSellBySellerId = async (req, res) => {
  const id = req.params['id'];
  const status = await sellsDao.deleteSellBySellerId(id);
  // res.sendStatus(200);
  res.json(status);
}

export default (app) => {
  app.post('/sells', createSell);

  app.get('/sells/movie/:mid', findSellByMovieId);
  app.get('/sells/seller/:id', findSellBySellerId);

  app.put('/sells/:sid', updateSell);

  app.delete('/sells/:sid', deleteSell);
  app.delete('/sells/seller/:id', deleteSellBySellerId);
}
