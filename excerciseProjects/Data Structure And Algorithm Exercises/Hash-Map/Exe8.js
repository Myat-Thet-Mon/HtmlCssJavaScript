// Write a Java program to test if a map contains a mapping for the specified value.
let specifiedValue=3;
const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
let trueOrFlase=0;
for(let [key,value] of map1){
    console.log("value",value)
    if(value === specifiedValue){
        trueOrFlase=1;
        break;
    }
}
if(trueOrFlase === 1){
    console.log("this map includes specified value")
}else{
    console.log("this map does not include specified value")

}