import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';

import customersController from "./controllers/customers/customers-controller.js";
import sellersController from "./controllers/sellers/sellers-controller.js";
import reviewsController from "./controllers/reviews/reviews-controller.js";
import sellsController from "./controllers/sells/sells-controller.js";

// DB_CS5610_PROJECT = mongodb+srv://webdev_tuiter:my6TH4BeGHTahq6X@tuiter.rawxmu6.mongodb.net/cs5610_project?retryWrites=true&w=majority
const CONNECTION_STRING = process.env.DB_CS5610_PROJECT || 'mongodb://127.0.0.1:27017/cs5610_project';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());

customersController(app);
sellersController(app);
reviewsController(app);
sellsController(app);

app.listen(process.env.PORT || 4000);
