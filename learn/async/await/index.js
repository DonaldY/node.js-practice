
const result = async function () {
    // 等待这 500ms 执行完，再往下执行
    var content = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(6);
        }, 500);
    });

    console.log(content);
    return 4;

}();

setTimeout(() => {
    console.log(result)
}, 800);

