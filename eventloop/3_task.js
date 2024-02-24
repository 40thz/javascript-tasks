setTimeout(function timeout() {
    console.log('timeout');
}, 0);

let p = new Promise(function (resolve, reject) {
    console.log('promise1');
    resolve();
});

p.then(function () {
    console.log('promise2');
});

console.log('log');
