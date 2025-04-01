import { connect } from '../models/requestModel.js';

// Async function to fetch all requests from the database
export async function viewAllRequests() {
    try {
        // Connect to the MongoDB collection
        const collection = await connect();
        const requests = await collection.find({}).toArray();

        console.log('Fetched all requests:', requests); // Log the fetched requests for debugging
        return requests;
    } catch (err) {
        console.error('Error fetching requests:', err); // Log any errors
        throw new Error('Failed to fetch requests'); // Throw a user-friendly error
    }
}