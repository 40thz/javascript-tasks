function isAnagramm(firstWord = '', secondWord = '') {
    if (firstWord.length !== secondWord.length) return false

    const toLowerFirstWord = firstWord.toLowerCase()
    const toLowerSecondWord = secondWord.toLowerCase()

    const str1 = toLowerFirstWord.split('').sort().join()
    const str2 = toLowerSecondWord.split('').sort().join()

    return str1 === str2
}

console.log(isAnagramm('нора', 'рано')) // true
console.log(isAnagramm('сосна', 'насос')) // true
console.log(isAnagramm('парк', 'карп')) // true