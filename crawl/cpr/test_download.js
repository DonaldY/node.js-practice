const http = require('http');
const fs = require("fs");

const options = {
    hostname: 'www.customs.gov.cn',
    path: '/customs/302249/zfxxgk/2799825/302274/302277/302276/4245830/2022031814252873524.xls',
    method: 'GET',
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "upgrade-insecure-requests": "1",
        "cookie": "__jsluid_h=4ea0888207d248cdded5e15a6d3e948c; AV7KYchI7HHaS=5vSS23w2EY0KcQiSGsc9cSOUcNav7GU6TABi0hEf4nqcJWWxLhaEE_iloIX8Mkxsydb6EvDYVTcqH3tmfxy4WAq; _gscu_1524496263=88991451i43clr19; AV7KYchI7HHaT=rKsZBYseMUzm0raLXQBNVIBE4.jrOfY.mUoICmX4FUNpGwBi7uAPTrC8KlWY_fPlXpgMSW9cgZQxu4QJ29R1EBMF6Uhn04RiuyB3R3YbT1WDbzEi.fNlHiMQO3mmYc34iWeoBPyPOgV8BmMTMP.sLRZOUMf0zosqjlS9gLpogjetue43A_rJneymsZApIRvOPA67nWdVperobEe8jMSlvQDtcmrcJiB7wSly8BaLiImxmrFT1mr_iHZ1VeddA0Vqu.kbSvCjexjAYZQFJf34AiOMpTOzs38m8tmPVI2oYGRXXFEKAD9dSQhLgpvlE_kA60JwvXzouuM6J3Xza.8ADaDKNKjO85x6ruIt4Z0XLq0; __jsl_clearance=1692346851.47|0|5om3cp7J%2FomqQJcnF%2BhG%2BPSwNJQ%3D",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    }
};

// 发起 HTTP GET 请求
http.get(options, (response) => {
    const file = fs.createWriteStream('/Users/yangyf/Downloads/1.xls');

    file.on('finish', () => {
        file.close();
        console.log('文件下载完成！: ' + 'fileName');
    });
}).on('error', (err) => {
    // 删除已下载的文件
    // fs.unlinkSync(path.join(destinationFolder, fileName));
    console.error(`下载文件时遇到错误：${err}`);
});