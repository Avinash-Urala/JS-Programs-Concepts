const sessions = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

function mergeData(sessions) {
  const grouped = sessions.reduce((acc, session) => {
    if (!acc[session.user]) {
      acc[session.user] = {
        user: session.user,
        duration: 0,
        equipment: new Set(),
      };
    }
    acc[session.user].duration += session.duration;
    session.equipment.forEach(element => {
        acc[session.user].equipment.add(element)
    });
    return acc;
  }, {});

  return Object.values(grouped);
}

function searchData(sessions, options) {
     
    for(let option of options) {
        
    }
}

// isUserPresent(session);

console.log(mergeData(sessions));

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 18 },
//   { name: "Charlie", age: 20 },
//   { name: "David", age: 30 },
//   { name: "Eve", age: 15 },
// ];
// function groupByAgeCategory(array) {
//   const result = {};
//   for (const person of array) {
//     const category = person.age > 20 ? "parent" : "child";
//     if (!result[category]) {
//       result[category] = [];
//     }
//     result[category].push(person);
//   }
//   return result;
// }
// const groupedByCategory = groupByAgeCategory(people);
// console.log(groupedByCategory);
