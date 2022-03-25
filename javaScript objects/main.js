// const aurora = {
//   name: "Aurora",
//   health: 150,
//   strength: 25,
//   xp: 0,
//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this
//       .strength} as strength and ${this.xp} points`;
//   }
// };

// // TODO: create the character object here

// // Aurora is harmed by an arrow
// aurora.health -= 20;

// // Aurora equips a strength necklace
// aurora.strength += 10;

// // Aurora learn a new skill
// aurora.xp += 15;


// console.log(aurora.describe()); 


// const dog= {
//  name: 'fang',
//  species:'boardhound',
//  size: 75,
// bark(){
//  return 'grr! grr!'
// }
// };

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


// const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here
// const circle={
//  circumference(){
//   return 2 * Math.PI * r * r
//  },
//  area(){
//   return Math.PI * r * r
//  }
// }
// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);



// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

const account={
 name: 'alex',
 balance: 0,
credit(x, y){
 
return `owner: ${this.name}, balance ${x - y} `
},
describe(){
 return `owner: ${this.name}, balance ${this.balance} `
}
}
console.log(account.describe())
console.log(account.credit(250, 80))