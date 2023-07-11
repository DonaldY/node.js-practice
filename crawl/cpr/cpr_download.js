const http = require('http');
const fs = require('fs');
const path = require('path');

const XLS_JSON = "[{\"year\":\"2023\",\"list\":[\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4899539/2023031811100388812.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4899530/2023031811074394721.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4966286/2023041811334097978.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/5037151/2023051818212261169.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/5100361/2023061811191521329.xls\"]},{\"year\":\"2022\",\"list\":[\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4248127/2022031816114432722.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4249383/2022031817305595244.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4296319/2022041811554654286.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4348589/2022051817160371742.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4405247/2022061717540328739.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4471482/2022071814220542127.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4527453/2022081811253650544.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4582851/2022091810184194656.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4635783/2022102410460186106.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4687321/2022111814333316366.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4747622/2022121810551359974.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4807001/2023011814435248949.xls\"]},{\"year\":\"2021\",\"list\":[\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3583748/2021031816175027078.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3583623/2021031816010553654.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3626138/2021041810310824345.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3673015/2021051817284190285.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3721177/2021061811214018147.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3769739/2021071810532911590.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3820957/2021081814465529939.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3890740/2021091815154852360.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3955405/2021101814062510689.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4006833/2021111814541553094.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4071086/2021121812191094688.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/4127886/2022011814531099123.xls\"]},{\"year\":\"2020\",\"list\":[\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3517520/2021011916152461203.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3517672/2021011916384072460.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3017217/2020071608515662707.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3073822/2020071515393523510.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3155198/2020071317433776791.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3201745/2020072313444015987.xls\",\"/eportal/fileDir/defaultCurSite/resource/cms/2020/08/2020082419123333658.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3299214/2020092318014348913.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3336574/2020102315002727966.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3395638/2020112316372697447.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3479951/2020122322053428803.xls\",\"/customs/302249/zfxxgk/2799825/302274/302277/302276/3516030/2021011819081510998.xls\"]}]";
const FOLDER_PATH = '/Users/yangyf/Downloads/CPR';
const XLS_DOMAIN = "http://www.customs.gov.cn";

async function main() {
    await doMain();
    sleep(10000);
}

async function doMain() {
    let yearXlsList = JSON.parse(XLS_JSON);
    for (let yearXls of yearXlsList) {
        let year = yearXls.year;
        let xlsList = yearXls.list;

        const folderPath = `${FOLDER_PATH}/${year}`;

        fs.mkdir(folderPath, { recursive: true }, (err) => {
            if (err) {
                console.error(`创建文件夹 ${folderPath} 时遇到错误：${err}`);
            } else {
                console.log(`文件夹 ${folderPath} 创建成功！`);

                for (let xlsUrl of xlsList) {
                    downLoadFile(xlsUrl, folderPath);
                }
            }
        });
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function downLoadFile(fileUrl, destinationFolder) {
    // 从 URL 中提取文件名
    const fileName = path.basename(fileUrl);

    // 创建写入流
    const file = fs.createWriteStream(path.join(destinationFolder, fileName));

    const options = {
        hostname: 'www.customs.gov.cn',
        path: fileUrl,
        method: 'GET',
        'headers': {
            'Accept': ' text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': ' zh-CN,zh;q=0.9,en;q=0.8',
            'Cache-Control': ' no-cache',
            'Connection': ' keep-alive',
            'Host': ' www.customs.gov.cn',
            'Pragma': ' no-cache',
            'User-Agent': ' Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'Upgrade-Insecure-Requests': ' 1',
            'Cookie': '__jsl_clearance=1689061786.675|0|iYzJSVn2ak0dVqF8ZehxFkbnntM%3D;AV7KYchI7HHaS=5iHB65GGp9L8pGLc6yJPeFwgDCEs.nnuczitA9_cQsQxmJJ84fUEFnKm2FI9fAOmqwz.3tGd430leVi57vUxafA;__jsluid_h=828edbe801414e870307229b08c486bb; __jsluid_h=6d190d84d3bfe5c5740e0affd53613f6'
        }
    };

    // 发起 HTTP GET 请求
    http.get(options, (response) => {
        response.pipe(file);

        file.on('finish', () => {
            file.close();
            console.log('文件下载完成！: ' + fileName);
        });
    }).on('error', (err) => {
        // 删除已下载的文件
        // fs.unlinkSync(path.join(destinationFolder, fileName));
        console.error(`下载文件时遇到错误：${err} , ${fileName}`);
    });
}

main();