const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let dreamName = '';
  let letra = '';
  let array = [];
  let final = '';
  for (i = 0; i < members.length; ++i) {
    if (array[i] !== 0) {
    const letra1 = members[i].replaceAll(' ', '');
    letra = letra1[0];
    dreamName += letra;
    final = dreamName.split("").sort().join("");
  }
}
  return final.toUpperCase();
}

module.exports = {
  createDreamTeam
};
