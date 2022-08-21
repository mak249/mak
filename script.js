
// scope chain is discussed in this  code

'use strict';

function calage (birthyear){
    const age  = 2022 - birthyear;
    function printage  (){
    const output  = ` ${firstname} is ${age} years old, born in ${ birthyear}`;
    console.log(output);
    
    if ( birthyear >= 1981  && birthyear <= 1996){
        var millionial = true;
        const firstname = 'John';
        const str  = `you are millionial  , ${firstname}`;  // it wiil show john inspite of mak  because it is first in the same clock scope then in parent scope
        console.log(str);  // this is a block  scope for const str you can not use outside of the block 
        function add(a,b){
        return a + b;
    }   
}
    // add (1,2);  
    // it wil show error because function  is block scoped in strict mode cant be called        
    console.log(millionial)    ;

}
    
    printage();
    return age; 
}
const firstname = 'mak';

calage(1991);

// console.log(age)
//  als0  printage( )   here age it out of scope it  is not deifned in the glowbal scope