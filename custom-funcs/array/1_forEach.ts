Array.prototype.myForEach = function (callbackFn, ctx) {
    for (let i = 0; i < this.length; i++) {
        callbackFn.apply(ctx || this, [this[i], i, this])
    }
}

const list = [
    {
        name: '1_item'
    },
    {
        name: '2_item'
    },
    {
        name: '3_item'
    }
]

const ctx = { name: 'ctx' };

// Default
list.myForEach((item) => {
    console.log(item)
})

// With context
list.myForEach((item) => {
    console.log(this)
}, ctx)