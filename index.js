const express = require('express');
const app = express();
const host = process.env.IP  || '0.0.0.0';
const port = process.env.PORT || 8080;
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

app.listen(port, host);
console.log(host);