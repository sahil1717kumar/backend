import * as dotenv from 'dotenv';
dotenv.config()

import connectDB from "./db/index.js";


//database connection
connectDB();