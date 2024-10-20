function deepCopy(obj) {
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }

}

const object1 = {
    name: 'firstname',
    address: {
        state: 'Kar',
        city: 'Bangalore',
    }
}


const object2 = JSON.parse(JSON.stringify(object1));
object2.name = 'Alice';

object2.address.city=  'Mysore'

console.log(object1)
console.log(object2);
