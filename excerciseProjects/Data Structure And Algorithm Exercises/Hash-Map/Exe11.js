// Write a Java program to get a set view of the keys contained in this map.
const map1 = new Map();
map1.set('a', 3);
map1.set('b', 2);
map1.set('c', 3);
let keySet=new Set(map1.keys());
for(let key of keySet){
    console.log("Key",key);
}