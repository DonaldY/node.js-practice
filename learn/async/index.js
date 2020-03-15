/**
 * async 只是 promise 的语法糖
 *
 * async/await
 * - async function 是 Promise的语法糖封装
 * - 异步编程的终极方案 - 以同步的方式写异步
 *   - await 关键字可以 “暂停” async function 的执行
 *   - await 关键字可以以同步的写法获取 Promise 的执行结果
 *   - try-catch 可以获取 await 所得到的错误
 */
console.log(async function () {
    return 4;
}());

console.log(function () {
    return new Promise((resolve, reject) => {
        resolve(4);
    })
}());