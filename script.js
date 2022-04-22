const years = [1870, 1899, 1950, 1977, 1990, 2000, 2004, 2018]

// creating an empty array to fill it with the age calculation
const age = []

for (let i = 0; i < years.length; i++) {

    age.push(2022 - years[i])
}

console.log(age) // (8) [152, 123, 72, 45, 32, 22, 18, 4]
