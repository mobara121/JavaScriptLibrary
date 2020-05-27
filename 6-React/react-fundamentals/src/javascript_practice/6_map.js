const instructors = [
    {name: 'Quincy', specialty: 'Mechanics'},
    {name: 'Kenn', specialty: 'Math'},
    {name: 'Paul', specialty: 'Science'},
    {name: 'Aaron', specialty: 'Painting'},
    {name: 'Julia', specialty: 'Skate'},

]

const instructorNames = instructors.map(instructor => instructor.name);
//const instructorNamesTwo = instructors.map(i => i.map)
console.log(instructorNames);

var kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

// //var reformattedArray = kvArray.map(obj => {
//     var rObj = {};
//     rObj[obj.key] = obj.value;
//     console.log(rObj);
//     return rObj;
// });