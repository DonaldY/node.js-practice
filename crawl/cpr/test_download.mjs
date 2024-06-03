import fetch from 'node-fetch';
import fs from 'fs'

fetch("http://www.customs.gov.cn/customs/302249/zfxxgk/2799825/302274/302277/302276/5755270/2024031813065739882.xls", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "upgrade-insecure-requests": "1",
        "cookie": "__jsluid_h=456735be2d59c0d04e1f75e1b2ed67ac;__jsl_clearance=1717398527.897|0|9LRwSQdf4wZ49qWpUWmh%2Fw3AQjI%3D;",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        //"Referer": "http://www.customs.gov.cn/customs/302249/zfxxgk/2799825/302274/302277/302276/4245830/2022031814252873524.xls",
        //"Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "method": "GET"
}).then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 将响应流写入文件流
    const dest = fs.createWriteStream('/Users/yangyf/Downloads/test20240603_1.xls');
    response.body.pipe(dest);

    console.log('File downloaded successfully!');
})
    .catch(error => {
        console.error(error);
    });