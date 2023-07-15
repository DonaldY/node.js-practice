const CryptoJS = require('crypto-js');


function v_decrypt(_0x2f61c9, _0x14dd13, _0x2bf4a2) {

    return CryptoJS["AES"]["decrypt"](_0x2f61c9, _0x14dd13, {
        "iv": _0x2bf4a2
    })["toString"](CryptoJS["enc"]["Utf8"]);
}
function getVideoInfo(data, token) {
    let _token_key = CryptoJS["enc"]["Utf8"]["parse"]("57A891D97E332A9D");
    let _token_iv = CryptoJS["enc"]["Utf8"]["parse"](token);
    return v_decrypt(data, _token_key, _token_iv);
}