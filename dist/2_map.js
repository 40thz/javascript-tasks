"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.myMap = function (callbackFn) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callbackFn(this[i], i, this));
    }
    return arr;
};
const list = [
    {
        name: '1_list'
    },
    {
        name: '2_list'
    },
    {
        name: '3_list'
    }
];
const arr = list.map(item => {
    return item;
});
console.log(arr);
