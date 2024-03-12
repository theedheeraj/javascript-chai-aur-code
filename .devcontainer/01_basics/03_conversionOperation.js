let score = 33// type will be number if it is in quote it will be string


console.log(typeof score);
console.log(typeof (score));

let valueInNuber = Number(score)
console.log(typeof valueInNuber);
console.log(valueInNuber);


// "33" => 33
// "33abc" NaN
// true => 1 

let isLoggedIn = 1

let booleanisLoggedIn = boolean(isLoggedIn);
console.log(booleanisLoggedIn);

// 1 => true , 0 => false
// " " => false
// "Dheeraj" => true

let value = 3
let negValue =  -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)


let str1 = "Dheeraj "
let str2 = "Sharma "

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log( 1 + "2");
console.log("1" + 2 + 2 );
console.log( 1 + 2 + "2");

console.log(+true)//1
console.log(+"")//0


let gamecounter  = 100
++gamecounter
console.log(gamecounter)

