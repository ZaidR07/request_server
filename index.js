const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;
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
    }, 120000); 
}

// Start the ping process
pingWebsite();



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
