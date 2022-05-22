const { XMLParser } = require('fast-xml-parser');
const request = require('request');

const PARSER_OPTIONS = {
    ignoreAttributes: false
};

const getCurrentSchedule = async (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, res, body) => {
            if (!error && res.statusCode == 200) {
                const parser = new XMLParser(PARSER_OPTIONS);
                const jsonContent = parser.parse(body);
                const shows = jsonContent.Schedule.Shows.Show;
                resolve(shows);
            } else {
                reject(error);
            }
        });
    })
};

module.exports = {
    getCurrentSchedule
}