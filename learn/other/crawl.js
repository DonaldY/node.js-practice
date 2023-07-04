const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.csdn.net/')
    .then((response) => {
        const html = response.data;
        // console.log(html);
        const $ = cheerio.load(html);

        // 使用类似 jQuery 的语法选择元素，并提取数据
        const title = $('head > title').text();
        console.log(`网页标题：${title}`);
    })
    .catch((error) => {
        console.error(`抓取页面时遇到错误：${error.message}`);
    });
