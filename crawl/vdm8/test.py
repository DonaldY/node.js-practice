import execjs

with open('script.js', 'r') as f:
    js_code = f.read()

ctx = execjs.compile(js_code)
result = ctx.call('add', 2, 3)
print(result)  # 输出 5