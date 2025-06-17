# Shrinkr - URL Shortener

A powerful and user-friendly URL shortening service built with Node.js and Express.js that allows users to create shortened versions of long URLs.

## Features

- URL Shortening with custom short IDs
- User Authentication
- User Dashboard
- Analytics for shortened URLs
- Clean and responsive UI using EJS templates

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **View Engine**: EJS
- **Authentication**: JWT (JSON Web Tokens)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Shrinkr
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
├── controllers/     # Route controllers
├── middlewares/    # Custom middleware functions
├── models/         # Database models
├── routes/         # Application routes
├── service/        # Business logic
├── views/          # EJS templates
└── index.js        # Application entry point
```

## Dependencies

- express: Web application framework
- mongoose: MongoDB object modeling
- ejs: Template engine
- jsonwebtoken: JWT implementation
- shortid: Generate short unique IDs
- cookie-parser: Parse cookie header
- uuid: Generate unique identifiers

## License

ISC

## Author

[Your Name]
