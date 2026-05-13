const dotenv = require('dotenv');
const express = require('express');

const connectToDatabase = require('./src/database/connect');
const userRoutes = require('./src/routes/user.routes');
const itemRoutes = require('./src/routes/item.routes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/items', itemRoutes)


connectToDatabase();

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
