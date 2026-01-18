const marvel_heros = ["thor", "ironman", "kannadiga", "appu", ]
const dc_heros = ["superman", "raddish", "sukoon"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.contact(dc_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]

const another_array = [1, 2, 3, 4, [5, 8, 9], 7[4, 5, [5,9]]]

const real_another_array = another_array.flat(infinity)
console.log(real_another_array);

console.log(Array.isArray("sanjana"))
console.log(Array.from("sanjana"))
console.log(Array.from({name: "sanjana"}))