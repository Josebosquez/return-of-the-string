/*******************
 * YOUR CODE HERE! *
 *******************/
function yell(string){
  return string + "!";
}

function getFirstCharacter(string1){
  string1 = string1[0];
  return string1;
}

function getLastCharacter (string){
  return string[string.length-1];
}

function getOneCharacter(string1, num){
  return string1 [num]
}

function getTwoCharacters(string, num3, num4){
  return string[num3] + string[num4];
}

function makeCapitalized (string){
  return string.toUpperCase();
}

function yellLouder(string){
  return string.toUpperCase() + "!!!"; 
}

function getInitials (str){
  const initials1 = str[0];
  const spaceIndex = str.indexOf(' ');
  const initials2 = str[spaceIndex + 1];
  
  return initials1 + "." + initials2 + ".";
}
//function getInitials (str){
//  return str[0] + "." + str[str.indexOf(' ') + 1]  + ".";
//}


/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
