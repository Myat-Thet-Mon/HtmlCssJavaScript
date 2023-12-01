// Write a Java program to get a shallow copy of a HashMap instance.
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
const map2=new Map(map1);
map2.set("d",4);
console.log("get",map1.get("d"));
console.log("get",map2.get("d"))