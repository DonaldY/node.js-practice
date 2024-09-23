const mysql = require('mysql2/promise');
const Redis = require('ioredis');
const { pipeline } = require('stream');
const { promisify } = require('util');

const pipelineAsync = promisify(pipeline);

// MySQL 连接配置
const mysqlConfig = {
    host: '',
    user: '',
    password: '!',
    database: '',
};

// Redis 连接配置
const redisConfig = {
    host: '',
    port: 6379,
    password: ''
};

async function main() {
    const mysqlConnection = await mysql.createConnection(mysqlConfig);
    const redisClient = new Redis(redisConfig);

    try {
        // 创建一个可读流来读取 MySQL 数据
        const [rows] = await mysqlConnection.query("SELECT id, companyName FROM ods_sss_lead WHERE companyName != '' LIMIT 1000000");

        console.log(`Total records fetched: ${rows.length}`);
        //console.log(`Total records fetched: %s`, rows[0].companyName);

        // 使用 pipeline 批量写入 Redis
        let pipeline = redisClient.pipeline();
        let inserted = 0;

        for (let i = 0; i < rows.length; i++) {
            const key = "crmc:MPT:" + rows[i].companyName;
            const value = 200000000000000 + i;
            pipeline.set(key, value);

            // 每 10000 条数据执行一次 pipeline
            if ((i + 1) % 10000 === 0) {
                inserted += 10000;
                await pipeline.exec();
                console.log(`Processed ${inserted} records`);
                pipeline = redisClient.pipeline();
            }
        }

        // 执行剩余的 pipeline 操作
        if (pipeline.length > 0) {
            await pipeline.exec();
        }

        console.log('Data transfer completed');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mysqlConnection.end();
        await redisClient.quit();
    }
}

main();
