const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  sepGen = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.addition = options.addition || '';
  console.log(str, options)
  console.log(typeof options)
  let strOne = '';
  let strArrw = [];
  let strResult;
  str = String(str);
  let adding = '';
  options.addition = String(options.addition);
  for (let i = 0; i < options.repeatTimes; i++) {
    if (options.additionRepeatTimes > 1) {
      adding = options.addition + options.additionSeparator;
    } else {
      adding = options.addition;
    }
    if (!options.additionRepeatTimes) {
      options.additionSeparator = '';
    }
    
    strOne += `${str}`+`${adding.repeat(options.additionRepeatTimes)}`
    console.log (strOne)
    strArrw.push(strOne);
  
    strOne = '';
  
    strResult = strArrw.join(sepGen)
  
  }
  return strResult
}

module.exports = {
  repeater
};
