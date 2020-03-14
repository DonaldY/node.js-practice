const glob = require('glob');


/**
 * 阻塞获取目录下文件
 *
 * 1. 获取目录下文件路径
 * 2. 打印 glob 耗时时间 ： 3.251ms
 * */
let result;
console.time('glob');
result = glob.sync(__dirname + '/**/*');
console.timeEnd('glob');
console.log(result);

