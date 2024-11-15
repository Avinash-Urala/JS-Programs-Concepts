function groupByAgeCategory(people) {
    const result = {};
    for(let person of people) {
        let category = person.age > 20 ? 'parent' : 'child';
        if(!result[category]) {
            result[category] = {count: 0, people: []}
        } 
        result[category].people.push(person);
        result[category].count += 1;
    }

    return result;
}



const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 30 },
    { name: "Eve", age: 15 },
  ];

const result = groupByAgeCategory(people);
console.log(result);  