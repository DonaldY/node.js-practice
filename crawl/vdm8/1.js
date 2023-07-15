const CryptoJS = require('crypto-js');

const bt_token = "f2edb6f860242b64";
let _token_key = CryptoJS["enc"]["Utf8"]["parse"]("57A891D97E332A9D");
let _token_iv = CryptoJS["enc"]["Utf8"]["parse"](bt_token);

function v_decrypt(_0x2f61c9, _0x14dd13, _0x2bf4a2) {
    return CryptoJS["AES"]["decrypt"](_0x2f61c9, _0x14dd13, {
        "iv": _0x2bf4a2
    })["toString"](CryptoJS["enc"]["Utf8"]);
}
function getVideoInfo(_0x285840) {
    return v_decrypt(_0x285840, _token_key, _token_iv);
}

console.log(getVideoInfo("crUiPOnipIqXC2eldbnO1ONUaUYZjpRnWInsZTF6rqanEs061ME9LCeA/JoNEVt5gF8mPEv3WZWg32HYto+8dVMpHiuThvAqU7c4Sb9zTkh5JjQrIocNX7NhWrp+41JuuODqFNzD7XoOnNrAB1e6bDkc3HI9Ar8elDyAn3jQNvuOu0YBNFQIrMrzyPI8FkCfqbYJtosHgSPjrXWOf92f7fht9FA+CLfExrej7hmYczNUJiGbyM916ojgKXKZj0w+BVahLOAzVVv3xZznMPpA8KoVajHHUGmFXEyUn8RB2TzOqmJ781ZxOvBXL834xgUtXDQ77ws/D8I+UUqcMw+o+B+EO9tbUnuqoQufkV9Xj3Av2+QsZagNcIWOgnh+7NEyF632yyplUC39bSG4roFlJxotDDvbzMXfbKdrpvULeyebQXvb8MRketHfv60218EOrHQpgmNvhuCcUYBQYs01cuY0/yos97Yw/eZ3EBpQdgmUxELBJpGNUjnZPgkikrKIhkOJFcMB/N9r0ATNWRxlDVg+XDrr2qz6UO4gKUHqRMtAwLNjIM8go1opJBRT4xsNvn6xpMW68yEF6UVU/8IlJA=="));
