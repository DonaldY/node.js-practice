import time
import requests
import re
import ddddocr

ocr = ddddocr.DdddOcr()

def get_sessionId():
    url = ''
    res = requests.get(url).text
    sessionId = re.findall('name="sessioinId" value="(.*?)"', res)[0]
    print(sessionId)

def login(u, p):
    pass

def get_code(id):
    url = ''
    response = requests.get(url)
    if response.status_code == 200:  # 检查响应是否成功
        with open('code.jpg', 'wb') as f:
            f.write(response.content)
        print('图片已成功保存')
    else:
        print('无法下载图片')
        return ''

    with open('code.jpg', 'rb') as f:
        img = f.read()
    code = ocr.classification(img)

    return code

if __name__ == '__main__':
    get_sessionId()
    # 2905641183
    # wang123456