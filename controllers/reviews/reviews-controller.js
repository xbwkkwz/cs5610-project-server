import * as reviewsDao from './reviews-dao.js';

// now it's asynchronous function
const createReview = async (req, res) => {
  // all files will be passed to the json
  const newData = req.body;
  const review = await reviewsDao.createReview(newData);
  res.json(review);
}

const findReviewById = async (req, res) => {
  const id = req.params['id'];
  const review = await reviewsDao.findReviewById(id);
  if (review) res.json(review);
  else res.json({});
}

const findReviewByCustomerId = async (req, res) => {
  const id = req.params['id'];
  const reviews = await reviewsDao.findReviewByCustomerId(id);
  // could return empty array
  if (reviews) res.json(reviews);
  else res.json([]);
}

const findReviewByCustomerFollowing = async (req, res) => {
  const idArrayStr = req.params['idArrayStr'];
  const idArray = idArrayStr.split(",");
  const reviews = await reviewsDao.findReviewByCustomerFollowing(idArray);
  // could return empty array
  if (reviews) res.json(reviews);
  else res.json([]);
}

const findReviewByMovieId = async (req, res) => {
  const id = req.params['mid'];
  const reviews = await reviewsDao.findReviewByMovieId(id);
  // could return empty array
  if (reviews) res.json(reviews);
  else res.json([]);
}

const updateReview = async (req, res) => {
  const id = req.params['rid'];
  const updates = req.body;
  const status = await reviewsDao.updateReview(id, updates);
  res.json(status);
}

const deleteReview = async (req, res) => {
  const id = req.params['rid'];
  const status = await reviewsDao.deleteReview(id);
  // res.sendStatus(200);
  res.json(status);
}

const deleteReviewByCustomerId = async (req, res) => {
  const id = req.params['id'];
  const status = await reviewsDao.deleteReviewByCustomerId(id);
  // res.sendStatus(200);
  res.json(status);
}

export default (app) => {
  app.post('/reviews', createReview);

  app.get('/reviews/:id', findReviewById);
  app.get('/reviews/movie/:mid', findReviewByMovieId);
  app.get('/reviews/customer/:id', findReviewByCustomerId);
  app.get('/reviews/customerFollowing/:idArrayStr', findReviewByCustomerFollowing);

  app.put('/reviews/:rid', updateReview);

  app.delete('/reviews/:rid', deleteReview);
  app.delete('/reviews/customer/:id', deleteReviewByCustomerId);

  // v2
  app.get('/details/:mid/reviews', findReviewByMovieId);

}
