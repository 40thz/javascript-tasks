setTimeout(() => {
    console.log(1)
})

const p = new Promise((resolve, reject) => {
    console.log(2)
    resolve()
}).then(() => {
    console.log(3)
})

setTimeout(() => {
    console.log(4)
})

const p1 = p.then(() => {
    console.log(5)
    setTimeout(() => console.log(6))
}).then(() => {
    setTimeout(() => console.log(7))
})

console.log(8)