const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = 'ABCDEFGHiJKLMNOPQRSTUVWXYZ'.split("");
const matrix = [];
for (let i = 0; i<alphabet.length; i++) {
  const row = [...alphabet.slice(i),...alphabet.slice(0, i)];
  matrix.push(row);
}
matrix.forEach(row => {console.log(row.join(''))})
let result = '';
class VigenereCipheringMachine {
  
  encrypt(frase,key) {
    let fraseUp = frase.toUpperCase();
    let keyUP = key.toUpperCase();
    for(let i = 0; i< frase.length; i++) {
      let letterWord = fraseUp[i];
      let letterKey = keyUP[i];
      let rowInd = letterWord.charCodeAt(0) - 'A'.charCodeAt(0);
      console.log (rowInd)
      let collInd = letterKey.charCodeAt(0) - 'A'.charCodeAt(0);
      console.log (collInd)

      if (rowInd >= 0 && rowInd < matrix.length && collInd >= 0&& collInd < matrix[0].length) {
        let collectLetter = matrix[rowInd][collInd];
        console.log (collectLetter)
        result += collectLetter;
      } 
    }
  }
  decrypt(frase,key) {
    let fraseUp = frase.toUpperCase();
    let keyUP = key.toUpperCase();
    for(let i = 0; i< frase.length; i++) {
      let letterWord = fraseUp[i];
      let letterKey = keyUP[i];
      let rowInd = letterWord.charCodeAt(0) - 'A'.charCodeAt(0);
      console.log (rowInd)
      let collInd = letterKey.charCodeAt(0) - 'A'.charCodeAt(0);
      console.log (collInd)

      if (rowInd >= 0 && rowInd < matrix.length && collInd >= 0&& collInd < matrix[0].length) {
        let collectLetter = matrix[rowInd][collInd];
        console.log (collectLetter)
        result += collectLetter;
      } 
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
