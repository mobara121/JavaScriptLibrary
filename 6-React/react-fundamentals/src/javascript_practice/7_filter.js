const instructors = [
    {name: 'Quincy', specialty: 'Mechanics', medals: 7},
    {name: 'Kenn', specialty: 'Math', medals: 5},
    {name: 'Paul', specialty: 'Science', medals: 8},
    {name: 'Aaron', specialty: 'Painting', medals: 4},
    {name: 'Julia', specialty: 'Skate', medals: 2},

]

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
//const instructorInfo = instructors.filter(instructor => instructors.name = 'Aaron' );
console.log(instructorNames);