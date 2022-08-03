import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const port = process.env.PORT || 8000;
require("dotenv").config({ path: "./config.env" });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

// Routes
//const userRouter = require('.routes/User');
//app.use('user', userRouter);

//const locationRouter = require('.routes/Location');
//app.use('location', locationRouter);


// Connect to db
mongoose
    .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log("db Connected"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});