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

function daysInMonth(month, leapYear) {
  switch(month) {
    case 'January':
      return 'January has 31 days';
      break;
    case 'February':
      if (leapYear) {
        return 'February has 29 days';
      } else {
        return 'February has 28 days';
      }
    break;
    case 'March':
      return 'March has 31 days';
    break;
    case 'April':
      return 'April has 30 days';
    break;
    case 'May':
      return 'May has 31 days';
    break;
    case 'June':
      return 'June has 30 days';
    break;
    case 'July':
      return 'July has 31 days';
    break;
    case 'August':
      return 'August has 31 days';
    break;
    case 'September':
      return 'September has 30 days';
    break;
    case 'October':
      return 'October has 31 days';
    break;
    case 'November':
     return 'November has 30 days';
    break;
    case 'December':
     return 'December has 31 days';
    break;
    default:
      return 'Invalid month';
  }
}

console.log(daysInMonth('February', true));

function rockPaperScissors(playerChoice) {
  if (playerChoice < 1 || playerChoice > 3 || typeof(playerChoice) != 'number') {
    return 'invalid input!';
  }
  console.log("player = " + playerChoice);
  const randomNo = Math.floor(Math.random() * 3) + 1;
  console.log("computer = " + randomNo);
  if (playerChoice === 1 && randomNo === 3) {
    return 'player wins!';
  } else if (playerChoice === 2 && randomNo === 1) {
    return 'player wins!';
  } else if (playerChoice === 3 && randomNo === 2) {
    return 'player wins!';
  } else if (playerChoice === randomNo ) {
    return 'tie!';
  } else {
    return 'computer wins!';
  }
}

console.log(rockPaperScissors(3));