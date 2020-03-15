/**
 *
 * resolved 状态的 Promise 会回调后面的第一个 .then
 * rejected 状态的 Promise 会回调后面的第一个 .catch
 *
 * 任何一个 rejected 状态且后面没有 .catch 的 Promise，都会造成浏览器/node环境的全局错误
 */
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(3);
    }, 500);
});

/**
 * 执行 then 和 catch 会返回一个新 Promise，该 Promise 最终状态根据 then
 * 和 catch 的回调函数的执行结果决定
 *
 * - 如果回调函数最终是 throw，该 Promise 是 rejected 状态
 * - 如果回调函数最终是 return， 该 Promise 是 resolved 状态
 * - 如果回调函数最终 return 了一个 Promise，该 Promise 会和回调函数 return 的 Promise 状态保持一致
 */
promise.then(function (res) {
    console.log(res);
});

promise.catch(function () {
    console.log(123);
});

console.log(promise);

setTimeout(() => {
    console.log(promise);
}, 800);

