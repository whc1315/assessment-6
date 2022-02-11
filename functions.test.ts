const {shuffleArray} = require('./utils')

let myArr = [1, 2, 3, 4, 5, 6]

describe('shuffleArray should', () => {
    // CODE HERE
    test("arrays are not in same order", () => {
        expect(shuffleArray(myArr)).not.toEqual(myArr)
    });

    test("test that the lengths remained the same", () => {
        const shuffleArray2 = shuffleArray(myArr)
        expect(shuffleArray2).toHaveLength(myArr.length)
    })
})