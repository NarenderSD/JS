const myheros = ["Ram", "Krishna", "Shiv"]
const dcheros = ["superman", "Bajrangbali", "Rade shyam"]

// myheros.push(dcheros)

// const allHeros = myheros.concat(dcheros)

// console.log(myheros);
// console.log(allHeros);


const allHeros = [...myheros, ...dcheros]
console.log(allHeros);


const ye_bi = [1, 2, 3, [4, 0, 1], 2, 3, [4, 5, [6, 7 ]]]

const hum_bi = ye_bi.flat(Infinity)
console.log(hum_bi);


console.log(Array.isArray("Narender"));
console.log(Array.from("Narender"));
console.log(Array.from({name: "Narender" }));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


