import { connect } from '../models/requestModel.js';

export async function viewAllRequests() {
    const collection = await connect();
    return await collection.find({}).toArray();
}
