let students =["Feruza", "Rahimabonu",  "Ilyos", "Sulaymon",];

//forEach
students.forEach((name) => {
    console.log(name);
    
});
//map
let students1 = students.map((name) => name.toUpperCase());
console.log(students1);

//filter
let people =[
    {name: "Abbosbek", age: 22},
    {name: "John", age: 35},
    {name: "Feruza", age: 16},
    {name: "Qurbonboy", age: 68},
];

let filteredPeople =people.filter((person) => person.age <18);
let filteredPeople2 =people.filter((person) => person.name[0] == "A");

console.log(filteredPeople);
console.log(filteredPeople2);


//some
let someResult = people.some((person) => person.age <  10 );
console.log(someResult);

//every
let everyResult = people.every((person) => person.age > 10);
console.log(everyResult);
