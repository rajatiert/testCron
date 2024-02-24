const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

async function cron(){
    try {
        // Make a request to the specified URL
        const response = await axios.get('https://full-stack-assignment.onrender.com/getAllAnimals');

        // Do something with the response data if needed
   
      console.log("response data = ", response);   
        // Respond to the client
        return response;
    } catch (error) {
        console.error(error.message);
         return null
    }
};

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

setInterval(()=>{cron()},1000 * 60 * 5);