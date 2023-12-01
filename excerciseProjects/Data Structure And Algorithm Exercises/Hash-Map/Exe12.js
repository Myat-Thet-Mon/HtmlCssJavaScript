// Write a Java program to get a collection view of the values contained in this map.
const map1 = new Map();
map1.set('a', 3);
map1.set('b', 2);
map1.set('c', 3);
let valueSet=Array.from(map1.values());
for(let value of valueSet){
    console.log("value",value);
}