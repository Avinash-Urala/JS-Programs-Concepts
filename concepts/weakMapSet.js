/** Objects - Basic data structure for storing key value pairs where keys are strings (or symbols)
 * and values can be any type
 * We can iterate over objects using Object.keys(), Object.values() or Object.entries()
 *  */

/** Map - Collection of key value pairs where keys can be any data type (Objects, primitives)
 * Maintains order of insertion of keys
 * provides handy methods like set(), delete(), has(), get()
 * Has size property , so easily check length
 */

/** Set - A collection of unique values, where values can be of any data type.
 * provides add(), delete() and has() methods
 */

const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
map.set({}, 'object');

console.log(map.size);
console.log(map.has('age'));
console.log(map.get('name'));

map.forEach((key, value) => {
    console.log(`${key} : ${value}`);
})

const set = new Set();
set.add(1);
set.add('key');
set.add(3);

console.log(set);

/** WeakSet - collection of objects (only objects) primitives are not allowed */
/** WeakMap - collection of key value pairs where keys are objects and values can be any type
 * bot weakMap and weakSets are not iterables
 */

let weakSet = new WeakSet();
let obj1 = {};
let obj2 = {};

weakSet.add(obj1);
// weakSet.add('1'); // throws error values must be objects
console.log(weakSet.has(obj1)); // true

obj1 = null; // Now obj1 can be garbage collected

let weakMap = new WeakMap();
let key = {};
let value = 'some value';

weakMap.set(key, value);
// weakMap.set('name', 'John'); // throws error keys must be objects
console.log(weakMap.get(key)); // 'some value'

key = null;