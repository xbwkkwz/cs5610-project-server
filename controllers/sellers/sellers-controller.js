import * as sellersDao from './sellers-dao.js';

// now it's asynchronous function
const createSeller = async (req, res) => {
  const newUser = req.body;

  // check email exist or not
  const resEmail = await sellersDao.findSellerByEmail(newUser.email);
  if (resEmail) {
    // res.json({"error": true, "message": "Email exists."});
    res.status(404).json({"Error": "Email exists."});
  }
  else {
    const seller = await sellersDao.createSeller(newUser);
    // return one json file
    res.json(seller);
  }
}

const findSellerByLogin = async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  // check email exist or not
  const resEmail = await sellersDao.findSellerByEmail(email);
  const seller = await sellersDao.findSellerByLogin(email, password);
  if (!resEmail) {
    // res.json({"error": true, "message": "Email does not exist."});
    res.status(404).json({"Error": "Email does not exist."});
    return;
  }
  if (!seller) {
    // res.json({"error": true, "message": "Wrong passwords."});
    res.status(404).json({"Error": "Wrong passwords."});
  }
  else {
    // return one json file
    res.json(seller);
  }
}

const findSellerById = async (req, res) => {
  const id = req.params['id'];
  const seller = await sellersDao.findSellerById(id);
  // return one json file or Not Found
  if (seller) res.json(seller);
  else res.sendStatus(404);
}

const updateSeller = async (req, res) => {
  const id = req.params['id'];
  const updates = req.body;
  const status = await sellersDao.updateSeller(id, updates);
  // the status json is not used
  res.json(status);
}

const deleteSeller = async (req, res) => {
  const id = req.params['id'];
  const status = await sellersDao.deleteSeller(id);
  // res.sendStatus(200);
  res.json(status);
}

export default (app) => {
  app.post('/sellers', createSeller);

  app.get('/sellers', findSellerByLogin);
  app.get('/sellers/:id', findSellerById);

  app.put('/sellers/:id', updateSeller);

  app.delete('sellers/:id', deleteSeller);
}
