const Redis = require('ioredis');
const redis = new Redis(); // 默认连接到 localhost:6379

// 生成随机中文字符的函数
function generateRandomChinese(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += String.fromCharCode(Math.floor(Math.random() * (0x9FFF - 0x4E00 + 1)) + 0x4E00);
    }
    return result;
}

// 批量插入数据的函数
async function batchInsert(totalRecords = 1000000, batchSize = 10000) {
    let pipeline = redis.pipeline();
    let inserted = 0;

    console.time('Total insertion time');

    for (let i = 1; i <= totalRecords; i++) {
        const key = "crm:search:custom:" + generateRandomChinese(10); // 生成10个字符的随机中文字符串作为key
        const value = i;
        pipeline.set(key, value);

        if (i % batchSize === 0) {
            await pipeline.exec();
            inserted += batchSize;
            console.log(`Inserted ${inserted} records`);
            pipeline = redis.pipeline();
        }
    }

    // 处理剩余的记录
    if (pipeline.length > 0) {
        await pipeline.exec();
        inserted += pipeline.length;
        console.log(`Inserted ${inserted} records`);
    }

    console.timeEnd('Total insertion time');
    process.exit(0);
}

// 执行批量插入
batchInsert().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
