require('dotenv').config();  // Import dotenv and configure it

const express = require("express");
const axios = require("axios");

const app = express();

// Get the port from the environment, fallback to 8000 if not set
const PORT = process.env.PORT || 8000;

const TARGET_URL = "https://billmaker-server.onrender.com/api/file"; 

// Function to make requests every 2 minutes
function pingWebsite() {
    setInterval(async () => {
        try {
            const response = await axios.post(TARGET_URL);
            console.log(`Pinged ${TARGET_URL} - Status: ${response.status}`);
        } catch (error) {
            console.error("Error pinging website:", error.message);
        }
    }, 12000); // 120000 ms = 2 minutes
}

// Start the ping process
pingWebsite();

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
