const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const utils = require('./utils.js');

// app constants
const APOLLO_KINO_SCHEDULE_URL = 'https://www.apollokino.lv/xml/Schedule/';

app.get("/", async (req, res) => {
    try {
        const movies = await utils.getCurrentSchedule(APOLLO_KINO_SCHEDULE_URL);
        res.send(movies);
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => {
    console.log('Server started.');
})