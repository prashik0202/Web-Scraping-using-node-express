//we are importing the installed packages:
const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const app = express();

const URL = process.env.URL;

axios(URL).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const article = [];
    $('.fc-item__title',html).each(function() {
        const tittle = $(this).text();
        const url = $(this).find('a').attr('href');
        article.push({
            tittle,
            url
        })
    })
    console.log(article);
}).catch((err) => {
    console.log(err);
})

//http://localhost:3000/
port = process.env.PORT;
app.listen(port,() => {
    console.log(`Server Started!: http://localhost:${port}`);
});


