const fs = require('fs');

const parentFolderPath = '/Users/yangyf/Documents';
const folderNames = ['folder1', 'folder2', 'folder3'];

folderNames.forEach((folderName) => {
    const folderPath = `${parentFolderPath}/${folderName}`;

    fs.mkdir(folderPath, { recursive: true }, (err) => {
        if (err) {
            console.error(`创建文件夹 ${folderPath} 时遇到错误：${err}`);
        } else {
            console.log(`文件夹 ${folderPath} 创建成功！`);
        }
    });
});