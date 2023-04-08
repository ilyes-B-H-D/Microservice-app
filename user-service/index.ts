import express from 'express';
import { connect } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use('/user', (req, res) => {
  res.send('Hello World from user service');
});


connect(
    process.env.DATABASE_URL || '',
).then(() => {
    console.log("Database connected..");
});

app.listen(process.env.PORT, () =>
  console.log(`server running on port : ${process.env.PORT} \n`)
);

export default app;