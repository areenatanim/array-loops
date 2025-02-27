// git remote add origin https://github.com/areenatanim/array-loops.git
// git branch -M main
// git push -u origin main


let friends = ["John", "Mary", "Jane", "Bob", "Alice"];
 
 for (let i of friends){
        console.log(i);
        i++;
        
 }

console.log('loop over');

 for (let i = 0; i < friends.length; i++){
        console.log(friends[i]);
        
 }
 console.log('loop over');
 for(let i = 0; i < 10 ; i++){
        console.log(friends[i]);
        
 }

 let i = 0;
 while (i < friends.length){
        console.log(friends[i]);
        i++;
 }
        for (const friend of friends) {
    console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

for (const friend of friends) {
    console.log(friend);
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
let reverse = numbers.reverse();
console.log(numbers);
console.log(reverse);





     
 
 