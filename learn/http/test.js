var axios = require('axios');
var data = '{"phone":"","password":""}';

var config = {
    method: 'post',
    url: 'https://api.upkuajing.com/client/auth/login',
    headers: {
        'Accept': ' application/json, text/plain, */*',
        'Accept-Language': ' zh-CN,zh;q=0.9',
        'Cache-Control': ' no-cache',
        'Connection': ' keep-alive',
        'DeviceType': ' 0',
        'Sec-Fetch-Dest': ' empty',
        'Sec-Fetch-Mode': ' cors',
        'Sec-Fetch-Site': ' same-site',
        'User-Agent': ' Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Version': ' 1.0.0',
        'sec-ch-ua': ' "Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': ' ?0',
        'sec-ch-ua-platform': ' "macOS"',
        'Content-Type': ' application/json;charset=UTF-8'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
