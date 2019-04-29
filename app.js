/* eslint-disable strict */
function jediName(firstName, lastName) {
  return lastName.substring(0, 3)+firstName.substring(0,2);
}
console.log(jediName('Zack', 'Johnson'));


function beyond(num) {
  if (!isFinite(num)) {
    return 'And beyond';
  } else if (isFinite(num) && num > 0) {
    return 'To Infinity';
  } else if (isFinite(num) && num < 0) {
    return 'To negative Infinity';
  } else {
    return 'Staying home'
  }
}

console.log(beyond(-14));

function decode(word) {
  let words = word.split(" ");
  let output = "";
  for (let i=0;i<words.length;i++) {
    if (words[i].substring(0,1) == 'a') {
      output += words[i][1];
    } else if (words[i].substring(0,1) == 'b') {
      output += words[i][2];
    } else if (words[i].substring(0,1) == 'c') {
      output += words[i][3];
    } else if (words[i].substring(0,1) == 'd') {
      output += words[i][4];
    } else {
      output += ' ';
    }
  
  }
  return output;
}

console.log(decode('craft block argon meter bells brown croon droop'));