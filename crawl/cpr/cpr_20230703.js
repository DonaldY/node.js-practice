const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const SAVE_FOLDER_PATH = '/Users/yangyf/Downloads';
const INDEX_NAME = "INDEX";
const PAGE_INDEX = "http://www.customs.gov.cn/customs/302249/zfxxgk/2799825/302274/302277/4899681/index.html";
const DOMAIN = "http://www.customs.gov.cn/";


function runMain() {
    console.log("begin...");

    let yearPageList = getYearPageList(INDEX_NAME, PAGE_INDEX);
    console.log(yearPageList);
    // for (let i = 0; i < yearPageList.length; ++i) {
    //     let yearPage = yearPageList[i];
    //     const folderName = yearPage.year;
    //     const folderPath = `${SAVE_FOLDER_PATH}/${folderName}`;
    //     fs.mkdir(folderPath, { recursive: true }, (err) => {
    //         if (err) {
    //             console.error(`创建文件夹 ${folderPath} 时遇到错误：${err}`);
    //         } else {
    //             console.log(`文件夹 ${folderPath} 创建成功！`);
    //         }
    //     });
    //
    // }

    console.log("end...");
}

function getYearPageList(name, pageUrl) {
    const HTML = catchPageHTML(name, pageUrl);
    let $ = cheerio.load(HTML);
    let pageListObj = $('#\\32 2b0be14d9504a8cbbf866f5e550a591 > div:nth-child(2) > div > a');
    let pageList = [];
    for (let i = 0; i < pageListObj.length; ++i) {
        let pageObj = pageListObj[i];

        let page = {};
        page.year = $(pageObj).text().trim();
        page.url = DOMAIN + pageObj.href;
        pageList.push(page);
    }

    return pageList;
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

runMain();