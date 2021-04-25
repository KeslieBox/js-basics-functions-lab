// Code your solution in this file!
function distanceTravelledInFeet(num1, num2){
   return num2 > num1 ? (num2-num1) * 264 : (num1-num2) * 264
}

function distanceFromHqInBlocks(num){
   return (num > 42) ? (num - 42) : (42 - num)
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }