require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const userRoute = require('./routes/userRoute');
const blogRoute = require('./routes/blogRoute');
const cors = require('cors');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use('/api/auth', userRoute);
app.use('/api/blogs', blogRoute);
app.use(errorHandler);

//database connected
connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
