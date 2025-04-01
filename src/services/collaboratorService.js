// services/addCollaboratorService.js
import dotenv from 'dotenv';
import { Octokit } from "@octokit/rest";
import { logCollaboratorRequest } from '../models/requestModel.js';

dotenv.config();
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function addCollaborator(owner, repo, username, permissions) {
    try {
        const response = await octokit.rest.repos.addCollaborator({
            owner,
            repo,
            username,
            permissions
        });

        // Log request to MongoDB
        const request = {
            owner,
            repo,
            username,
            permissions,
            action: 'add collaborator',
            timestamp: new Date()
        };
        await logCollaboratorRequest(request);

        return response.status;

    } catch (error) {
        console.error(`Error adding collaborator: ${error}`);
    }
}

export async function removeCollaborator(owner, repo, username) {
    try {
        const response = await octokit.rest.repos.removeCollaborator({
            owner,
            repo,
            username
        });

        // Log request to MongoDB
        const request = {
            owner,
            repo,
            username,
            action: 'remove collaborator',
            timestamp: new Date()
        };
        await logCollaboratorRequest(request);

        return response.status;

    } catch (error) {
        console.error(`Error removing collaborator: ${error}`);
    }
}