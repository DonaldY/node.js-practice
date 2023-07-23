import requests
import execjs

with open('1.js', 'r') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)

en = []
cn = []

def get_data():
    headers = {
        'authority': 'apiv3.shanbay.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'cookie': '_ga=GA1.2.853402836.1689439924; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22fnxdse%22%2C%22first_id%22%3A%221895a776fd0663-0c0cfac1528ea6-1b525634-1296000-1895a776fd11ade%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%7D%2C%22%24device_id%22%3A%221895a776fd0663-0c0cfac1528ea6-1b525634-1296000-1895a776fd11ade%22%7D; auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUyNzM4Mjg0LCJleHAiOjE2OTA4ODE0MDYsImV4cF92MiI6MTY5MDg4MTQwNiwiZGV2aWNlIjoiIiwidXNlcm5hbWUiOiJQaG9uZV9iZjNiYjMwMWI5NTRjMGFlIiwiaXNfc3RhZmYiOjAsInNlc3Npb25faWQiOiJlNTM2ZGYzNDI1MGIxMWVlODM5MWUyOTMwY2NkMjg1NCJ9.kKQOdFl66TpkD-0vlQUNLyUJ9LIwDrEQyrIy5zG54Ks; csrftoken=6caf0745b88b80d190471894f633a36c',
        'origin': 'https://web.shanbay.com',
        'pragma': 'no-cache',
        'referer': 'https://web.shanbay.com/',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'x-csrftoken': '6caf0745b88b80d190471894f633a36c',
    }
    params = (
        ('ipp', '10'),
        ('page', '1'),
    )
    response = requests.get('https://apiv3.shanbay.com/wordsapp/user_material_books/rcdtq/learning/words/unlearned_items', headers=headers, params=params)

    print(ctx.call('getDecode', eval(response.text)['data']))


if __name__ == '__main__':
    get_data()