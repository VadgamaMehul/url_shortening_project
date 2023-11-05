# URL Shortening Service - Backend

This project is a backend service for a URL shortening service, built using Node.js and Express.js, with either MySQL or MongoDB as the database. It includes user registration and authentication using JSON Web Tokens (JWT) for user-specific short URLs. Additionally, the project provides API endpoints for URL shortening, URL redirection, and URL management, with proper error handling and validation.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Dependencies](#dependencies)
3. [Setting Up the Environment](#setting-up-the-environment)
4. [Running the Server](#running-the-server)
5. [API Endpoints](#api-endpoints)
6. [Testing](#testing)
7. [Deployment](#deployment)
8. [Security](#security)

---

## 1. Project Structure <a name="project-structure"></a>

The project structure is as follows:

This structure represents the organization of files and directories within the project.

- `models/` contains data models for users and URLs.
- `routes/` contains API route definitions.
- `server.js` is the main setup file for the Express.js server.
- `.env.example` is an example of the environment variables file.
- `package.json` lists Node.js project dependencies.
- `README.md` is the project's main documentation file.

# Dependencies <a name="dependencies"></a>

To run the project, you'll need the following dependencies. These are specified in the `package.json` file:

- Node.js
- Express.js
- MongoDB
- Mongoose (for MongoDB) 
- JSON Web Tokens (jsonwebtoken)
- Body-parser
- EJS
- Cors
- Dotenv

Install these dependencies by running `npm install` in the project directory.

# 3. Setting Up the Environment <a name="setting-up-the-environment"></a>

- Duplicate the .env.example file to create a .env file in the project root.

- Set the following environment variables in the .env file:
1. PORT=<port_number>: The port number on which your application will listen. Default value is 3000.
2. MONGODB_URI=<mongodb_uri>: This should be set to your MongoDB connection string.

# 4. Running the Server <a name="running-the-server"></a>
To start the server, run: `npm start`

# 5. API Endpoints <a name="api-endpoints"></a>


## URL Management

### GET /
- **Description:** Get a list of shortened URLs 
- **Response:** List of shortened URLs.

### GET /:shortUrl
- **Description:** Get details of a specific shortened URL.
- **Response:** Details of the shortened URL.

### POST /shortUrls
- **Description:** Shorten a URL.
- **Request Body:**
  - `url`: Original URL to shorten
- **Response:** Shortened URL.

### DELETE /remove/:id
- **Description:** Delete a shortened URL.
- **Response:** URL deleted successfully.


# 6. Deployment and Security

## Deployment <a name="deployment"></a>

Deployed in Render:
https://url-shortening-service-h2hb.onrender.com/



You are now ready to set up and run the project locally. Refer to the API documentation for usage details, and ensure security measures are in place before deployment.
