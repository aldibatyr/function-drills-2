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