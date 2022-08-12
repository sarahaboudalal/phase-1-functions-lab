// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    if (pickup > 42) {
        return pickup - 42
    } else { 
      return 42 - pickup
    }
}
console.log(distanceFromHqInBlocks(43))

function distanceFromHqInFeet(distance) {
   if (distance > 42) {
    return (distance - 42)*264
   } else {
    return (42 - distance)*264
   }
}

console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(pickup, hq) {
    if (pickup > hq) {
        return (pickup - hq)*264
    } else {
        return (hq - pickup)*264
    }
}

function calculatesFarePrice(pickup, hq) {
 let result = Math.abs((pickup - hq)*264)
 if (result <= 400) {
   return 0;
 } else if (400 < result && result < 2000) {
    return (result - 400)*0.02;
 } else if (2500 > result && result > 2000) {
   return 25;
 } else {
    return 'cannot travel that far';
 }
}
