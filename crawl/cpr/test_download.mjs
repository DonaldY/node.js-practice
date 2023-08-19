import fetch from 'node-fetch';
import fs from 'fs'

fetch("http://www.customs.gov.cn/customs/302249/zfxxgk/2799825/302274/302277/302276/4245830/2022031814252873524.xls", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "upgrade-insecure-requests": "1",
        "cookie": "__jsluid_h=4ea0888207d248cdded5e15a6d3e948c; AV7KYchI7HHaS=5vSS23w2EY0KcQiSGsc9cSOUcNav7GU6TABi0hEf4nqcJWWxLhaEE_iloIX8Mkxsydb6EvDYVTcqH3tmfxy4WAq; _gscu_1524496263=88991451i43clr19; AV7KYchI7HHaT=rKsZBYseMUzm0raLXQBNVIBE4.jrOfY.mUoICmX4FUNpGwBi7uAPTrC8KlWY_fPlXpgMSW9cgZQxu4QJ29R1EBMF6Uhn04RiuyB3R3YbT1WDbzEi.fNlHiMQO3mmYc34iWeoBPyPOgV8BmMTMP.sLRZOUMf0zosqjlS9gLpogjetue43A_rJneymsZApIRvOPA67nWdVperobEe8jMSlvQDtcmrcJiB7wSly8BaLiImxmrFT1mr_iHZ1VeddA0Vqu.kbSvCjexjAYZQFJf34AiOMpTOzs38m8tmPVI2oYGRXXFEKAD9dSQhLgpvlE_kA60JwvXzouuM6J3Xza.8ADaDKNKjO85x6ruIt4Z0XLq0; __jsl_clearance=1692431904.592|0|KwvaLY1NmYM3KZoW40izJ8d54FQ%3D",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
}).then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 将响应流写入文件流
    const dest = fs.createWriteStream('/Users/yangyf/Downloads/test.xls');
    response.body.pipe(dest);

    console.log('File downloaded successfully!');
})
    .catch(error => {
        console.error(error);
    });