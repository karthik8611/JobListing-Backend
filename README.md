# Job Listing Platform

## Description
This project is a backend application developed using Node.js and Express. It serves as the server-side component for a job listing platform. The platform allows users to browse available job listings, apply for jobs, and manage their job applications.

## Installation
To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd project-directory`
3. Install dependencies: `npm install`
4. Set up environment variables (if required).
5. Start the server: `npm start`

## Usage
The API endpoints allow users to perform various actions:
- API ENDPOINTS
Job ROUTE
- POST /api/v1/user/register----------------(register a user)
- POST /api/v1/user/login----------------(login a user)
- GET /api/v1/logout -------------------(logout)
- POST /api/v1/user/add-job -----------------(addJob)
- PUT /api/v1/user/update-job/:Id ----------(update a job)
- POST /api/v1/user/searchJob -----------------(search job)
- GET /api/v1/user/Job/:id -----------------(get specific job)
- GET /api/v1/user/getAllJobs -----------------(get all jobs)
- GET /api/v1/user/me -----------------(view profile)


## Dependencies
- **bcrypt**: `^5.1.1` - Password hashing library.
- **body-parser**: `^1.20.2` - Middleware for parsing request bodies.
- **cookie-parser**: `^1.4.6` - Middleware for handling cookies.
- **cors**: `^2.8.5` - Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: `^16.3.1` - Library for loading environment variables from a .env file.
- **express**: `^4.18.2` - Web framework for Node.js.
- **jsonwebtoken**: `^9.0.2` - Library for generating and verifying JSON Web Tokens.
- **mongoose**: `^8.0.3` - MongoDB object modeling tool.
- **nodemon**: `^3.0.2` - Utility to automatically restart the server during development.


- Mention any contributors, libraries, or resources used in the project that require attribution.

## Contact
For inquiries or support, contact [maintainer's email/social handle].

