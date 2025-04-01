// src/services/viewRepositoryService.js
import dotenv from 'dotenv';
import { Octokit } from "@octokit/rest";
import { logCollaboratorRequest } from '../models/requestModel.js';

dotenv.config();
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function viewRepository(org) {
    if (!org) {
        console.warn('Organization name is empty. Returning an empty array.');
        return [];
    }
    try {
        const response = await octokit.rest.repos.listForOrg({
            org,
        });

        // Log request to MongoDB
        const request = {
            org,
            action: 'view repositories',
            timestamp: new Date()
        };
        await logCollaboratorRequest(request);

        return response.data;

    } catch (error) {
        console.error(`Error viewing repositories: ${error.message}`);
        throw error;
    }
}