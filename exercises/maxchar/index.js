// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxValue = 0;
  let maxChar = '';
  const charMap = str.split('').reduce((acc, curr)=>{
    if(!acc[curr]) acc[curr] = 1;
    else acc[curr]++
    return acc
  },{})
  for(key in charMap){
    if(charMap[key] > maxValue){
      maxValue = charMap[key];
      maxChar = key
    }
  }
  return maxChar;
}

module.exports = maxChar;
