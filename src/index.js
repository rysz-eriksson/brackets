// module.exports = function check(str, bracketsConfig) {
//   // your solution
// }


function check(str, bracketsConfig) {
    let value = false
    const strArray = str.split('')
    let checkArray = []
    for (let i=0; i < bracketsConfig.length; i++) {
      bracketsConfig[i].forEach((item) => {
        checkArray.push(item)
      })
    }
    strArray.forEach((letter, index) => {
      const indexInCheck = checkArray.findIndex(item => item === letter)
      if (indexInCheck === -1) {
        value = false
      }
        if (indexInCheck % 2 === 0) {
        indexOF2ndEl = strArray.findIndex((elem) => elem === checkArray[indexInCheck+1])

        // indexOF2ndEl - index wystąpienia pary (closing bracket) w stringu
        if ((index % 2 === 0 && indexOF2ndEl % 2 === 0) || (index % 2 !== 0 && indexOF2ndEl % 2 !== 0)) {
          value = false
        } else {
          value = true
        }
        } else {
          indexOF2ndEl = strArray.findIndex((elem) => elem === checkArray[indexInCheck-1])
          if ((index % 2 === 0 && indexOF2ndEl % 2 === 0) || (index % 2 !== 0 && indexOF2ndEl % 2 !== 0)) {
            value = false
          } else {
            value = true
          }
        }
    })
    if (strArray.length % 2 !== 0) {
      value = false
    }
    return value
  }

console.log(check('()', [['(', ')']])) // -> true
console.log(check('((()))()', [['(', ')']])) // -> true
console.log(check('())(', [['(', ')']])) // -> false
console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])) // -> true
console.log(check('[(])', [['(', ')'], ['[', ']']])) // -> false
console.log(check('[]()', [['(', ')'], ['[', ']']])) // -> true
console.log(check('[]()(', [['(', ')'], ['[', ']']])) // -> false
console.log(check('||', [['|', '|']])) // -> true
console.log(check('[]()', [['(', ')'], ['[', ']']])) // -> true

console.log(check('|()|', [['(', ')'], ['|', '|']])) // -> true
console.log(check('|(|)', [['(', ')'], ['|', '|']])) // -> false
console.log(check('|()|(||)||', [['(', ')'], ['|', '|']])) // -> true