
# Blog API Task

This is a simple Blog API built using Node.js, Express, TypeScript, MongoDB, JWT authentication, and Jest for testing.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
- [Project Structure](#project-structure)
- [Authentication and Authorization](#authentication-and-authorization)
- [Routes](#routes)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version x.x.x)
- MongoDB installed and running
- npm or yarn package manager
- A code editor of your choice (VSCode recommended)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hellhckr/blog-api-task.git
```

2. Navigate to the project directory:

```bash
cd blog-api-task
```

3. Install dependencies:

```bash
npm install
```

### Environment Configuration

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
MONGODB_URI=your-mongodb-connection-string
SECRET_KEY=your-secret-key-for-jwt
```

Replace `your-mongodb-connection-string` with your MongoDB connection string and `your-secret-key-for-jwt` with a secure secret key for JWT.

## Project Structure

The project structure is organized as follows:

```
blog-api-task/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.ts
│
├── .env
├── jest.config.js
├── package.json
└── tsconfig.json
```

- `src/`: Contains the source code of the application.
- `.env`: Configuration file for environment variables.
- `jest.config.js`: Configuration for Jest testing.
- `package.json`: Project metadata and dependencies.
- `tsconfig.json`: TypeScript configuration.

## Authentication and Authorization

- Authentication is implemented using JSON Web Tokens (JWT). Users can obtain a token by logging in with their credentials.
- Authorization is implemented for specific routes. You can assign roles to users and restrict access based on roles.

## Routes

- `/api/auth`: Authentication routes.
  - `/login`: POST request to authenticate a user and receive a JWT token.

- `/api/posts`: Blog post routes.
  - `/`: GET all posts.
  - `/:id`: GET a specific post by ID.
  - `/`: POST to create a new post (requires authentication).
  - `/:id`: PUT to update a post (requires authentication).
  - `/:id`: DELETE to delete a post (requires authentication).

## Testing

The project includes unit tests for routes and middleware using Jest and Supertest. Run tests with the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Feel free to submit issues, pull requests, or suggest improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

