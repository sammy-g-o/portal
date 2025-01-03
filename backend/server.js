require('dotenv').config();
const express = require('express');
const sequelize = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    console.log('Database connected successfully.');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.log('Error connecting to the database', err));