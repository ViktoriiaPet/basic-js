const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
let season = '';
function getSeason(date) {
  month = (date.getMonth())
  console.log(month >=6)
  console.log(month)
  if (month >=1 && month < 3) {
    season = 'winter';
  } 
  if (month >=3 && month < 6) {
    season = 'spring';
  } 
  if (month >=6 && month < 9) {
    season = 'summer';
  } 
  if (month >=9 && month < 12) {
    season = 'autumn';
  } 
  if (month === 0) {
    season = 'winter';
  } 
  return season;
}

module.exports = {
  getSeason
};
