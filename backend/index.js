const http = require('http'); // If you need to create an HTTP server
const app = require('./src/app'); // Import the app with all the routes and middleware
require('dotenv').config(); // Load environment variables from a .env file if needed

// Define the port, either from environment variables or a default
const PORT = process.env.PORT || 5000;

// Create the HTTP server and pass in the Express app
const server = http.createServer(app);

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});