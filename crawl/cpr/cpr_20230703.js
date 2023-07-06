const http = require('http');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const SAVE_FOLDER_PATH = '/Users/yangyf/Downloads/CPR';
const INDEX_NAME = "INDEX";
const PAGE_INDEX = "http://www.customs.gov.cn/customs/302249/zfxxgk/2799825/302274/302277/4899681/index.html";
const INDEX = "http://www.customs.gov.cn/";
const DOMAIN = "http://www.customs.gov.cn/";
let driver;

async function main() {
    const options = new chrome.Options();
    // 设置远程 Chrome 实例的地址和端口号
    options.addArguments(`--remote-debugging-address=127.0.0.1`);
    options.addArguments(`--remote-debugging-port=9222`);
    options.addArguments(`--headless`);  //
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    try {
        await execute();

        await sleep(10000);
    } finally {
        await driver.quit(); // 关闭WebDriver会话
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function execute() {
    console.log("begin...");

    let yearPageList = await getYearPageList();
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

async function getYearPageList() {
    //await driver.get(INDEX, 5000);
    await driver.get(PAGE_INDEX);
    await driver.wait(until.stalenessOf(driver.findElement(By.tagName('html'))), 10000);

    let pageObjList = await driver.findElements(By.xpath('//*[@id="22b0be14d9504a8cbbf866f5e550a591"]/div[2]/div/a'));
    let pageList = [];
    for (let pageObj of pageObjList) {
        let page = {};
        const text = await pageObj.getText();
        const href = await pageObj.getAttribute('href');
        page.year = text;
        page.url = DOMAIN + href;
        pageList.push(page);
    }

    return pageList;
}

function downLoadFile(fileUrl, destinationFolder) {
    // 从 URL 中提取文件名
    const fileName = path.basename(fileUrl);

    // 创建写入流
    const file = fs.createWriteStream(path.join(destinationFolder, fileName));

    // 发起 HTTP GET 请求
    http.get(fileUrl, (response) => {
        response.pipe(file);

        file.on('finish', () => {
            file.close();
            console.log('文件下载完成！');
        });
    }).on('error', (err) => {
        // 删除已下载的文件
        fs.unlinkSync(path.join(destinationFolder, fileName));
        console.error(`下载文件时遇到错误：${err.message}`);
    });
}

main();