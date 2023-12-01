// Write a Java program to get the value of a specified key in a map.
let specifiedKey="b";
const map1 = new Map();
map1.set('a', 3);
map1.set('b', 2);
map1.set('c', 3);
for(let entry of map1.entries()){
   if(entry[0] === specifiedKey){
        console.log("the value of a specified key",entry[1]);
        break;
    }
}