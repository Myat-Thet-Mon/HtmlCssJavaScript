// Write a Java program to create a set view of the mappings contained in a map.
const map1 = new Map();
map1.set('a', 3);
map1.set('b', 2);
map1.set('c', 3);
for(let entry of map1.entries()){
    console.log(entry[0] ,":",entry[1])
}