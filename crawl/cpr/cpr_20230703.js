const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const SAVE_FOLDER_PATH = '/Users/yangyf/Downloads';
const INDEX_NAME = "INDEX";
const PAGE_INDEX = "http://www.customs.gov.cn/customs/302249/zfxxgk/2799825/302274/302277/4899681/index.html";

function runMain() {
    console.log("begin...");

    let yearPageList = getYearPageList(INDEX_NAME, PAGE_INDEX);

    console.log("end...");
}

function getYearPageList(name, pageUrl) {
    const HTML = catchPageHTML(name, pageUrl) || '';
    if (!HTML) {

        return;
    }
    const $ = cheerio.load(HTML);

}

async function catchPageHTML(name, pageUrl) {
    try {
        const response = await axios.get(pageUrl);

        return response.data;
    } catch (error) {
        console.error(`ERROR: ${name} , msg：${error.message}`);

        return "";
    }
}