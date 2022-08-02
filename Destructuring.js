//OBJECT DESTRUCTURING 1t
// let facts = {numPlanets: 8,yearNeptuneDiscovered:1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//OBJECT DESTRUCTURING 2

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered:1846,
    yearMarsDiscovered:1659
};

let {numPlanets, ...discoveryYears}= planetFacts;

console.log(discoveryYears);
// {yearNeptuneDiscovered:1846, yearMarsDiscovered:1659}

//OBJECT DESTRUCTING 3

function getUserData({firstName, favoriteColor = "green"}) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor:"purple"})


//ARRAY DESTRUCTING 1

let [first,second,third] = ["Maya","Marisa","Chi"];
console.log(first); //Maya
console.log(second); //Marisa
console.log(third); // Chi


//ARRAY DESTRUCTURING 2
console.log(raindrops); //Raindrops on roses
console.log(whiskers); // Whiskers on Kittens
console.log(aFewOfMyFavoriteThings);//["bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]

//Array DESTRUCTURING 3
console.log(numbers) // [10,30,20]

//ES2015 ReFactoring

//Assigning Variables to Object Properties
var obj = {
    numbers:{
        a:1,
        b:2
    }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

//Object Destructuring
const obj = {
    numbers:{
        a:1,
        b:2
    }
};

const {a,b} = obj.numbers;


//ES5 ARRAY SWAP

var arr = [1,2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//ONE LINE ARRAY SWAP WITH DESTRUCTURING

[arr[0], arr[1]] = [arr[1], arr[0]]

// raceResults


const raceResults = ([first,second,third,...rest]) => ({first,second,third,rest})
