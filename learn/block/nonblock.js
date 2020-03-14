const glob = require('glob');


/**
 * 非阻塞获取目录下文件
 *
 * 1. 获取目录下文件路径
 * 2. 打印 glob 耗时时间 ： 3.251ms
 * */
let result;
console.time('glob');
result = glob(__dirname + '/**/*', function (err, res) {
    result = res;
    // console.log(result)

    console.log('got result');
});
console.timeEnd('glob');

console.log(1 + 1);