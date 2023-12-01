// Write a Java program to check whether a map contains key-value mappings (empty) or not
const map1 = new Map();
console.log("Check empty or not",map1.size)
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log("Check empty or not",map1.size);
if(map1.size === 0){
    console.log("map is empty")
}else{
    console.log("map is not empty")
}
