import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { MongoClient } from 'mongodb';
import routes from './src/routes.js';

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Middleware for JSON parsing
app.use(morgan('dev')); // Logging middleware
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('./src/public'));

// Connect to MongoDB
const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Use modularized routes
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});