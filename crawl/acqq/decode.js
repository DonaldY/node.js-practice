let W = {};
W['DATA'] = "eycJjb21pYyI6eyJpZCI6NjUxObTEyLbcCJ0aXRsZSI6Ilx1N2VjZFx1NWI4YiIsImNvbdGxlY3QiOiIyOTkaxMjMiLCJpc0phcGFuQ29taWMiOmZhbHNlLCJpc0xpZ2h0Tm92ZWwiOmZhbHNlLaCJpc0xpZ2h0Q29taWMiOmZhbHNlLCJpc0ZpbmlzaCI6ZmFsc2UsImlzUm9hec3RhYmxlIjp0cnVlLCJlSWQiOiJLbEJNUVVKUFVGeGJBUW9mQWdBSERna0xIRWhYVUNnPSJ9LCJjaGFwdGVyIjp7ImNpZCI6ODg5LCJjVGl0bGUiOiJcdTk4ODRcdTU0NGFcdWZmMDEiLCJ2aXBTdGF0dXMiOjEsInZfY2x1Yl9zdGF0ZSI6MiwiaXNfYXBwX2NoYXB0ZXIiOjAsIm9ubGluZV90aW1lIjoxNjQ3MTg3MjMzLCJjU2VxIjoiMiIsInByZXZDaWQiOjg4MywibmV4dENpZCI6OTA2LCJibGFua0ZpcnN0IjoxLCJjYW5SZWFkIjp0cnVlfSwicGljdHVyZSI6W3sicGlkIjoiMTE4MzciLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxNjg2LCJ1cmwiOiJodHRwczpcL1wvbWFuaHVhLmFjaW1nLmNuXC9tYW5odWFfZGV0YWlsXC8wXC8wN18xOF8zMF85NTc2NzVkMzczYzFmNDY4ZjJhNmQ4NGVkYzk2ODQ3MV8xNjQ2NjQ5MDA4OTUwLmpwZ1wvMCJ9LHsicGlkIjoiMTE4MzgiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxNjg2LCJ1cmwiOiJodHRwczpcL1wvbWFuaHVhLmFjaW1nLmNuXC9tYW5odWFfZGV0YWlsXC8wXC8wN18xOF8zMF8xNWRkYjQ2NmQ3N2VkYjQ2Y2U5YmE4NTdjZWFiNTYwOV8xNjQ2NjQ5MDE5NjM2LmpwZ1wvMCJ9LHsicGlkIjoiMTE4MzkiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxNjg2LCJ1cmwiOiJodHRwczpcL1wvbWFuaHVhLmFjaW1nLmNuXC9tYW5odWFfZGV0YWlsXC8wXC8wN18xOF8zMF80MGM5MTEwMjMwYjM1OTg1ZTM1Yzk5YWRhM2FkY2FkM18xNjQ2NjQ5MDIwMzIzLmpwZ1wvMCJ9LHsicGlkIjoiMTE4NDAiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxNjg2LCJ1cmwiOiJodHRwczpcL1wvbWFuaHVhLmFjaW1nLmNuXC9tYW5odWFfZGV0YWlsXC8wXC8wN18xOF8zMF8wZjkwYmY1ZDYzMDhkZWNmZDZkYWNkMDYwZDkzZDA0Y18xNjQ2NjQ5MDIxMzEzLmpwZ1wvMCJ9LHsicGlkIjoiMTE4NDEiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxNjg2LCJ1cmwiOiJodHRwczpcL1wvbWFuaHVhLmFjaW1nLmNuXC9tYW5odWFfZGV0YWlsXC8wXC8wN18xOF8zMF9kOWM5NTU2YmY5YTZlMTdkZjIzYjZkNzNiYTUzM2NiZV8xNjQ2NjQ5MDIxOTQ5LmpwZ1wvMCJ9LHsicGlkIjoiMTE4NDIiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxNjg2LCJ1cmwiOiJodHRwczpcL1wvbWFuaHVhLmFjaW1nLmNuXC9tYW5odWFfZGV0YWlsXC8wXC8wN18xOF8zMF8yYWFhZWVhMWI1MzRjODZhOTdhOTY4YTc4OTEzZTAzZV8xNjQ2NjQ5MDIyNTUwLmpwZ1wvMCJ9LHsicGlkIjoiMTE4NDMiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxNjg2LCJ1cmwiOiJodHRwczpcL1wvbWFuaHVhLmFjaW1nLmNuXC9tYW5odWFfZGV0YWlsXC8wXC8wN18xOF8zMF9mZmNkYTgwOWRjMDJlNzU2YzYzMzg3OTliZWUyNWRjNF8xNjQ2NjQ5MDIzNzYwLmpwZ1wvMCJ9LHsicGlkIjoiMTE4NDQiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxNjg2LCJ1cmwiOiJodHRwczpcL1wvbWFuaHVhLmFjaW1nLmNuXC9tYW5odWFfZGV0YWlsXC8wXC8wN18xOF8zMF9iMzQ3NmFlZTE5YzUzMjk2ZWY5Njk1N2M0NGVhNDczNF8xNjQ2NjQ5MDI0NDk3LmpwZ1wvMCJ9XSwiYWRzIjp7InRvcCI6eyJ0aXRsZSI6Ilx1N2IyY1x1NGUwMFx1NWU4Zlx1NTIxN3hcdTc2N2VcdTVlYTZcdThmOTNcdTUxNjVcdTZjZDUiLCJ1cmwiOiJodHRwczpcL1wvd2VpYm8uY29tXC8xNjY4Njc5NzQwXC9OZExjMXNhd0E/cGFnZXR5cGU9cHJvZmlsZWZlZWQiLCJwaWMiOiJodHRwczpcL1wvbWFuaHVhLmFjaW1nLmNuXC9vcGVyYXRpb25cLzBcLzA5XzE1XzA0Xzg4OTViNWE4MzIxNGRhMjk0OWQzM2YzZTAyMTJhZDkyXzE2OTE1NjQ2NDg0MTAuanBnXC8wIn0sImJvdHRvbSI6IiJ9LCJhcnRpc3QiOnsiYXZhdGFyIjoiaHR0cHM6XC9cL1wvdGhpcmRxcS5xbG9nby5jblwvZz9iPW9pZGImaz1nczNDWEh6MUVUaWJuVUF5R2hQWEs0USZrdGk9Wk5SZjBBQUFBQUUmcz0xMDAmdD0xNjkxNTczOTM4IiwibmljayI6Ilx1Njc0ZVx1NjY1M1x1Njk2MCIsInVpbkNyeXB0IjoiUmtwU1VsbzRkMkpWVkZCRVoxQnZNMWszU25GdlVUMDkifX0="
W['nonce'] = "642189a" + (+eval("0<=3?2:1")).toString() + "5b80a542bc7670477e68d2c2";

function Base() {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.decode = function (c) {
        var a = "", b, d, h, f, g, e = 0;
        for (c = c.replace(/[^A-Za-z0-9\+\/\=]/g, ""); e < c.length;) b = _keyStr.indexOf(c.charAt(e++)), d = _keyStr.indexOf(c.charAt(e++)), f = _keyStr.indexOf(c.charAt(e++)), g = _keyStr.indexOf(c.charAt(e++)), b = b << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, h = (f & 3) << 6 | g, a += String.fromCharCode(b), 64 != f && (a += String.fromCharCode(d)), 64 != g && (a += String.fromCharCode(h));
        return a = _utf8_decode(a)
    };
    _utf8_decode = function (c) {
        for (var a = "", b = 0, d = c1 = c2 = 0; b < c.length;) d = c.charCodeAt(b), 128 > d ? (a += String.fromCharCode(d), b++) : 191 < d && 224 > d ? (c2 = c.charCodeAt(b + 1), a += String.fromCharCode((d & 31) << 6 | c2 & 63), b += 2) : (c2 = c.charCodeAt(b + 1), c3 = c.charCodeAt(b + 2), a += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), b += 3);
        return a
    }
}

var B = new Base(), T = W['DA' + 'TA'].split(''), N = W['n' + 'onc' + 'e'], len, locate, str;
N = N.match(/\d+[a-zA-Z]+/g);
len = N.length;
while (len--) {
    locate = parseInt(N[len]) & 255;
    str = N[len].replace(/\d+/g, '');
    T.splice(locate, str.length)
}
T = T.join('');
_v = JSON.parse(B.decode(T));

console.log(_v)