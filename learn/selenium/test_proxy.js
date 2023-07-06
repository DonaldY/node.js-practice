const { Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function example() {
    const options = new chrome.Options();
    // 设置远程 Chrome 实例的地址和端口号
    options.addArguments(`--remote-debugging-address=127.0.0.1`);
    options.addArguments(`--remote-debugging-port=9222`);
    options.addArguments(`--headless`);  //
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    try {
        // 导航到指定URL
        await driver.get('https://www.baidu.com');

        await sleep(10000);
    } finally {
        await driver.quit(); // 关闭WebDriver会话
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

example();
