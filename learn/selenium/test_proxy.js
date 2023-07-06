const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function example() {
    const options = new chrome.Options();
    options.addArguments('--remote-debugging-port=9222'); // 设置远程调试端口
    let driver = await new Builder().forBrowser('chrome')
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
