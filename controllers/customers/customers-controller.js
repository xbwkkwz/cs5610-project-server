import * as customersDao from './customers-dao.js';

// now it's asynchronous function
const createCustomer = async (req, res) => {
  const newUser = req.body;
  
  // check email exist or not
  const resEmail = await customersDao.findCustomerByEmail(newUser.email);
  if (resEmail) {
    // res.json({"error": true, "message": "Email exists."});
    res.status(404).json({error: "Email exists."});
  }
  else {
    const customer = await customersDao.createCustomer(newUser);
    // return one json file
    res.json(customer);
  }
}

const findCustomerByLogin = async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  // check email exist or not
  const resEmail = await customersDao.findCustomerByEmail(email);
  const customer = await customersDao.findCustomerByLogin(email, password);
  if (!resEmail) {
    // res.json({"error": true, "message": "Email does not exist."});
    res.status(404).json({error: "Email does not exist."});
    return;
  }
  if (!customer) {
    // res.json({"error": true, "message": "Wrong passwords."});
    res.status(404).json({error: "Wrong passwords."});
  }
  else {
    // return one json file
    res.json(customer);
  }
}

const findCustomerById = async (req, res) => {
  const id = req.params['id'];
  const customer = await customersDao.findCustomerById(id);
  // return one json file or Not Found
  if (customer) res.json(customer);
  else res.sendStatus(404);
}

const findCustomerFollowing = async (req, res) => {
  const id = req.params['id'];
  const customer = await customersDao.findCustomerById(id);
  const followings = await customersDao.findCustomerFollowing(customer.following);
  // could return enpty array
  if (followings) res.json(followings);
  else res.json([]);
}

const findCustomerFollower = async (req, res) => {
  const id = req.params['id'];
  const customer = await customersDao.findCustomerById(id);
  const followers = await customersDao.findCustomerFollower(customer.follower);
  // could return enpty array
  if (followers) res.json(followers);
  else res.json([]);
}

const updateCustomer = async (req, res) => {
  const id = req.params['id'];
  const updates = req.body;
  const status = await customersDao.updateCustomer(id, updates);
  // the status json is not used
  res.json(status);
}

const updateFollow = async (req, res) => {
  const idA = req.params['idA'];
  const idB = req.params['idB'];
  const updates = req.body;
  const statusA = await customersDao.updateFollowing(idA, updates.A);
  const statusB = await customersDao.updateFollower(idB, updates.B);
  // the status json is not used
  res.json(statusB);
}

const deleteCustomer = async (req, res) => {
  const id = req.params['id'];
  const customer = await customersDao.findCustomerById(id);

  // remove my following list
  const following = await customersDao.findCustomerFollowing(customer.following);
  for (let i = 0; i < following.length; i++) {
    // find customer B
    let idB = following[i];
    let cB = await customersDao.findCustomerById(idB);
    // remove customer A, datatype is different!
    let followerRemoved = cB.follower.filter(idA => idA != id);
    await customersDao.updateFollower(idB, {"follower": followerRemoved});
  }

  // remove my follower list
  const follower = await customersDao.findCustomerFollower(customer.follower);
  for (let i = 0; i < follower.length; i++) {
    // find customer A
    let idA = follower[i];
    let cA = await customersDao.findCustomerById(idA);
    // remove customer B, datatype is different!
    let followingRemoved = cA.following.filter(idB => idB != id);
    await customersDao.updateFollowing(idA, {"following": followingRemoved});
  }

  const status = await customersDao.deleteCustomer(id);
  // res.sendStatus(200);
  res.json(status);
}



export default (app) => {
  app.post('/customers', createCustomer);

  app.get('/customers', findCustomerByLogin);
  app.get('/customers/:id', findCustomerById);
  app.get('/customers/following/:id', findCustomerFollowing);
  app.get('/customers/follower/:id', findCustomerFollower);

  app.put('/customers/:id', updateCustomer);
  app.put('/customers/follow/:idA/:idB', updateFollow);

  app.delete('/customers/:id', deleteCustomer);
}
