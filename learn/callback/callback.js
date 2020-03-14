
/**
 * callback 无法 try catch 捕获异常
 *
 * try {
 * } catch (e) {
 * }
 */

interview(function (res) {
    if (res instanceof Error) {
        console.log('cry');
        return;
    }
    console.log('smile');
});

function interview(callback) {

    setTimeout(() => {

        if (Math.random() < 0.8) {

            callback('success');
        } else {

            callback(new Error('fail'));
        }
    }, 500)
}