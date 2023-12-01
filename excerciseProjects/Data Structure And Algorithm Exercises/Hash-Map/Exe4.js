// Write a Java program to remove all mappings from a map.
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
// for (let [key, value] of map1) {
//     console.log("key", key, "value", value);
// }
console.log(map1.get('a'));
map1.clear();
console.log(map1.get('a'));
console.log(map1.get('b'));
