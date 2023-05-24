// task1
function getSumOfItems(arr) {
	return arr.reduce((a,b)=>a+b)
}



// task2
function rangeOfNum(start, end) {
	let arr=[]
	for(let i=start+1;i<end;i++)
		{
		arr.push(i)
		}
	return arr
}


// task3
function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(a=>a!="cola"&&a!="fanta")
}




// task4
function addIndexes(arr) {
	return arr.map((a,b)=>a+b)
}



// task5
function fill(arr, value, start = 0, end = arr.length) {
	return arr.fill(value,start,end)
}

// task6
function filterArray(arr) {
	return arr.filter(a=>Number.isInteger(a))
}

// task7
function integerBoolean(n) {
	return n.split("").map(a=>a==1)
}

// task8
function forbiddenLetter(char, arr) {
	return arr.some(a=>a.includes(char))==false
}

// task9
function makeRug(m, n, s="#"){
	let a=0
	let arr=[]
	while(a<m)
		{
		arr.push(s.repeat(n))
			a++
		}
	return arr
}

// task10
function largestNumbers(n, arr) {
	return arr.sort((a,b)=>b-a).slice(0,n).reverse()
}

// task11
const str1 = `({ first = "John", last = "Doe", alias:nickname="JD" } = { first: "James", last: "Baker" }).toString()`



// task12
let names = []

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
] 

const str = `
	for(let {name="valid"} of users) {
			names.push(name)
	}`



// task13
	function afterNYears(names, n) {
		for(let a in names)
			{
	names[a]+=Math.abs(n)
			}
		return names
	}

// task14
	function isEqual(objOne, objTwo) {
		return JSON.stringify(objOne)==JSON.stringify(objTwo)
	}

// task15
	function spaceWeights(planetA, weight, planetB) {
		let obj={
	Mercury:	3.7,
	Venus:	8.87,
	Earth:	9.81,
	Mars:	3.711,
	Jupiter:	24.79,
	Saturn:	10.44,
	Uranus:	8.69,
	Neptune:	11.15,
		}
	let b= (weight/obj[planetA])*obj[planetB]
		return +b.toFixed(2)
	}

task16

	const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405,
"U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};

function nameScore(name) {
let arr=	name.split("").filter(a=>a!=" ")
let score=arr.reduce((a,b)=>a+scores[b],0)
	
	
if(score <= 60) return "NOT TOO GOOD"
else if(61 <= score&& score<= 300 ) return "PRETTY GOOD"
else if(301 <= score &&score<= 599) return "VERY GOOD"
else if(score >= 600) return "THE BEST"

}

// task17
function mapping(letters) {
	let a=letters.reduce((a,b)=>{
			a[b]=b.toUpperCase()
			return a
		},{})
	return a
	}



// task18
function tpChecker(home) {
    let a= Math.floor((home.tp*500)/(home.people*57))
    return a>14?`Your TP will last ${a} days, no need to panic!`:`Your TP will only last ${a} days, buy more!`
    }


// task19
    function findIt(obj, name) {
	
        return Object.keys(obj).includes(name)?`${name[0].toUpperCase()+name.slice(1)} is gone...`:`${name[0].toUpperCase()+name.slice(1)} is here!`
    }


// task20
    function getDistance(a, b) {
        return + Math.hypot(a.x-b.x, a.y-b.y).toFixed(3)
    }
