const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const SAVE_FOLDER_PATH = '/Users/yangyf/Downloads';
const PAGE_INDEX = "http://www.customs.gov.cn/customs/302249/zfxxgk/2799825/302274/302277/4899681/index.html";

function runMain() {
    console.log("begin...");



    console.log("end...");
}

async function get() {
    try {
        const response = await axios.get(PAGE_INDEX);
        const data = response.data;
    } catch (error) {
        console.error(`抓取页面时遇到错误：${error.message}`);
    }
}
