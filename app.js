const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port=process.env.PORT||3000;

app.get('/hello', (req, res) => {
    res.send('Hello this is my first express app');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})