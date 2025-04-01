import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

export async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('githubActivity').collection('collaboratorRequests');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err; // Re-throw the error for proper handling elsewhere
    }
}

export async function logCollaboratorRequest(request) {
    const collection = await connect();
    await collection.insertOne(request);
    console.log('Collaborator request logged:', request);
}
