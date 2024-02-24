setTimeout(() => {
    console.log('timeout1')
})

new Promise((resolve) => {
    console.log('promise')
    setTimeout(() => {
        console.log('timeout2')
        resolve()
    })
}).then(() => {
    console.log('then1')
}).then(() => {
    console.log('then2')
})

console.log('log')

setTimeout(() => {
    console.log('timeout3')
})
