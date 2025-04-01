# NodeJS Webapp

This is a simple NodeJS webapp that uses ExpressJS to serve a simple HTML page. This will add a user to your repository.

## Pre-reqs

- Node.js (>= 22.x)
- npm (>= 10.x)
- GitHub Personal Access Token (with repo permissions)
- MongoDB URI

## Branches

- **main**: The main branch contains features from all branches. It is the final version of the project to show off GitHub Copilot.
- **mongodb-v4.4-version**: This branch is for demos to upgrade to MongoDB v4.4 with GitHub Copilot.
- **generate-playwright-tests**: This branch is for demos to generate Playwright tests with GitHub Copilot.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    ```bash
    cp .env.example .env
    ```
    Update the `.env` file with your GitHub token and MongoDB URI:
    ```
    GITHUB_TOKEN=your_github_token
    MONGODB_URI=your_mongodb_uri
    ```

4. Set up MongoDB:
    - Create a MongoDB cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a database and a collection for storing collaborator requests.
    - Update the `.env` file with your MongoDB URI.

5. Start the application:
    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## Features

- Add and remove collaborators from GitHub repositories.
- Track collaborator requests in MongoDB.
- View repositories of a GitHub organization
- Error handling for non-existing users
- Modern UI with Bootstrap

### Add Collaborator

To add a collaborator, navigate to `/addCollaborator` and fill out the form with the required details.

### Remove Collaborator

To remove a collaborator from a repository, navigate to the "Remove Collaborator" page and fill out the form with the following details:

- **Owner**: The owner of the repository.
- **Repo**: The name of the repository.
- **Username**: The username of the collaborator to be removed.

Click the "Remove Collaborator" button to submit the form. A popup message will display the result of the operation.

### View Repositories

To view the repositories of a GitHub organization, navigate to `/viewRepos` and enter the organization name. Click the "View Repositories" button to see the list of repositories.

## View Collaborator Requests

To view all collaborator requests logged in the database, navigate to `/viewAllRequests` in your browser.