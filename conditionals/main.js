// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

// const day= (prompt('what is today?')).toLowerCase();
// switch(day){
//  case 'sunday':
//   console.log('tomorrow is monday');
//   break;
//    case 'monday':
//   console.log('tomorrow is tuesday');
//   break;
//    case 'tuesday':
//   console.log('tomorrow is wednesday');
//   break;
//    case 'wednesday':
//   console.log('tomorrow is thursday');
//   break;
//    case 'thursday':
//   console.log('tomorrow is friday');
//   break;
//    case 'friday':
//   console.log('tomorrow is saturday');
//   break;
//    case 'saturday':
//   console.log('tomorrow is sunday');
//   break;
//   default:
//    console.log('is there really an option like that?');
//    break;
// }


// Final values
// Take a look at the following program.

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);


// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

// const month= Number(prompt('how many days in the month?'))
// switch(month){
// case 1:
//  console.log('31 days');
//  break;
// case 2:
//  console.log('28 days');
//  break;
// case 3:
//  console.log('31 days');
//  break;
// case 4:
//  console.log('30 days');
//  break;
// case 5:
//  console.log('31 days');
//  break;
// case 6:
//  console.log('30 days');
//  break;
// case 7:
//  console.log('31 days');
//  break;
// case 8:
//  console.log('31 days');
//  break;
// case 9:
//  console.log('30 days');
//  break;
// case 10:
//  console.log('31 days');
//  break;
// case 11:
//  console.log('30 days');
//  break;
// case 12:
//  console.log('31 days');
//  break;
// default:
//  console.log('is there a new calendar?');
// }


// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

// 14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s (midnight)
let time;
let hours = Number(prompt('what hour is it?'))
let minutes = Number(prompt('what minute is it?'))
let seconds = Number(prompt('what second is it?'))
if(seconds <= 59 && seconds >= 0 && minutes <= 59 && minutes >= 0 && hours >= 0 && hours <= 23){
 seconds++;
}else if(seconds >= 60){
 seconds = 0;
 minutes++;
}else if(minutes >= 60){
 minutes = 0;
 seconds++;
 hours++;
}else if(hours >= 24){
 hours = 0;
 seconds++;
}else if(minutes >= 60 && hours >= 24 && seconds >= 60){
minutes=0;
hours=0;
seconds=0;
}else{
 console.log('enter a valid info')
}
console.log(`${hours}h ${minutes}m ${seconds}s `)
