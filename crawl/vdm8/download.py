import re
import requests
import execjs
from lxml import etree

with open('2.js', 'r') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)


def get_number_of_episodes(url):
    res = requests.get(url).text
    html = etree.HTML(res)
    episodes_ = html.xpath(r'//*[@id="playlist1"]/ul/li/a/@href')
    episodes = ['https://www.vdm8.com/' + u for u in episodes_]
    return episodes


def get_video_url(url):
    res = requests.get(url).text
    url = re.findall('"url":"(.*?)"', res)[1]
    url = 'https://danmu.yhdmjx.com/m3u8.php?url=' + url
    res = requests.get(url).text
    data = re.findall('getVideoInfo\("(.*?)"\)', res)[0]
    token = re.findall('bt_token = "(.*?)"', res)[0]
    return ctx.call('getVideoInfo', data, token)


if __name__ == '__main__':
    url_list = get_number_of_episodes('https://www.vdm8.com/video/8330.html')
    for i in range(len(url_list)):
        print('正在下载第{}集'.format(i + 1))
        url = get_video_url(url_list[i])
        print(url)
        # spidertools.donwload_byte_function(url=get_video_url(url_list[i]), type='mp4', name=str(i + 1), path='./布莱泽奥特曼/)
