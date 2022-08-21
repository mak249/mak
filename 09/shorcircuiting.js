//&& || operators
//logical operators  can use any data type , return any data type, short circuiting
console.log(3 || 'jonas'); // if first value is truthy value then it will print first value

console.log(''|| 'jonas'); 
console.log(undefined || null)  //null if both are falsy then it retturn last value
console.log(true  || o );  // true
console.log(undefined ||0 || '' ||'helloo' || 23 ||null );

resturant  = { name : 'zam zam hotel',destination : "kamptee"}
const guest1 =  resturant.guest1 ? resturant.guest :  10 ; 
console.log(guest1);

const guest2   = resturant.guest2|| 10;
console.log(guest2);

console.log( " --- AND operator --- ");
console.log(0 && 'jonas'); // if any of the value is false then it will print false 
console.log(7 && 'jonas'); // last value is returned 
console.log( 'hello ' && '23' && null && 'mak');  //give falsy value
