//this keyword




// // console.log(this);

// const calcage = function (birthyear) {
//     console.log(2022 - birthyear);
//     console.log(this);
// };

// calcage(1992);





// const calcage2 = birthyear => {console.log(2022 - birthyear);
//     console.log(this);
// }
// calcage2(1992);

//   var firstname = 'kaif'; //global variable

const mak = {
    firstname : "mohd", 
    year : 1991,
    calage3 : function () { 
        console.log(this)

        console.log(2037 - this.year);
        
        //solution 1
        // const self =  this;

        // const millineal = function () {
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }

        
        const millineal = () => 
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);

        
    
millineal();
    },
greet : function() { 
    console.log(`hey ${this.firstname}`);
},

};

mak.greet();


mak.calage3();

// const sam = {
//     year : 2017,
// }

// sam.calcage3  = mak.calage3;

// sam.calcage3();
// //thi keyword is dynamic





// it will show undefined because this does not work in arrow function