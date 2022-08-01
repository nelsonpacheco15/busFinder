const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res, next) => {
  res.send('Welcome to Express');
});


const userRouter = require('.routes/User');
app.use('user', userRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});