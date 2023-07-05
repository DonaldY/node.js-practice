const axios = require('axios');
const cheerio = require('cheerio');

axios.get('http://www.customs.gov.cn/customs/302249/zfxxgk/2799825/302274/302277/4899681/index.html',
    {
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Host': 'www.customs.gov.cn',
            'Origin': 'http://www.customs.gov.cn',
            'Cookie': '__jsluid_h=940adf28c45c5d5ba1579464cfed5333; AV7KYchI7HHaS=5bg1vCFS5WfLjd8rzBn6iIH1t6OXQSyWOGOkfFOQdRtxW6UDTjKqnYl_7Tkh52zwsCOfrdzsg.LOxKkUdxbtIVA; _gscu_1524496263=87326908zni1lx10; _gscbrs_1524496263=1; EPORTALJSESSIONID=3OQgZHv5ef1yYSPOgw055_ScSRR-oUKQG4spBJhkPiKaG964_nek!1029704743; __jsl_clearance=1688525751.598|0|%2FJIWzgWl%2FvlaKiCBNnloRxZ5xJQ%3D; AV7KYchI7HHaT=6FjGOyAh_y89mDoFYd63u6DjeXr.wtF30P47ubZTrrfjEaogbmOCZvl3ODIanabinAqRk0HrHdcibWMbE3mJXY501fdeMZOFpZNLPzLs_isgorRyR4qSDBHSyfrrTJedmevg9VE1G4gdklliaEr4KExYdJDVIzQxbnqFxPUzfPtMfVi1K.EJ5F_Roa.RwOBvU.SFwPCMNjnSKqyg2rAwegCoL9ici5BAeMQgQ9FXbLgZLf7TR5ktAJfiSgiZYjZtTFawC2t0xCaYMmXS8jyKhRsZ6OYYplGbIwxvRVuNWja1acuUcMhSyMSUXDLWj855M5.x4QKkiWEOPGKINZ4gBubF9lDf9IDTp4.VrQ6sHM3',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
        }
    })
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
