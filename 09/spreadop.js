const  arr= [1,2,3] ;
const badarray = [...arr ,5,6,7];
console.log(badarray);

const weekday = ['MON','TUE','WED','THU', 'FRI','SAT','SUN'];  //es6 ehnaced object literals

const openinghours  = {

    [weekday[0]] : {
        open : '9:00',
        close : '18:00'
    },
    TUE : {
        open : '9:00',
        close : '18:00'
    },
    [weekday[2]] : {
        open : '9:00',
        close : '18:00'
    },
    [weekday[5]] : {
        open : "0: 00",
        close : "24: 00"
    }

};

const resturant = {
    name: ' zam zam hotel',
    location: 'kathmandu',
    categories  : ['italian', 'chinese', 'american'],
    startmenu : ['pizza', 'pasta', 'burger'],
    mainmenu : [ 'paneer', 'dosa', 'paneer roll'],
    //openinghours : openinghours,
    //es 6 enhanced object literal

    openinghours,

    //es6 new enhaced features
    // order  : function(starterindex,mainindex){
    //     return  [this.startmenu[starterindex], this.mainmenu[mainindex]]; or :-

    order(starterindex,mainindex){
        return  [this.startmenu[starterindex], this.mainmenu[mainindex]];

    },
        orderdelivery  : function({starterindex = 1,mainindex =0 ,time= "12:00", address = "kamptee"}){
        console.log([` order recieved  ${this.startmenu[starterindex]}, ${this.mainmenu[mainindex]} to  ${address} at ${time} `]);

    },
    orderpasta  : function (ing1 , ing2 , ing3 ){
        console.log(`here  is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    }   ,
    orderpizza(mainingredients , ...restingrdients){
        console.log(mainingredients);
        console.log(restingrdients);
    }
};

//rest operator - left hand side of =   ('assignment operator')

const [ a, b, ...others] = [1,2,3,4,5];

console.log(a,b,others);

const [ pizza , burger,...otherfood ] = [ ...resturant.startmenu , ...resturant.mainmenu];
console.log(pizza, burger,otherfood);

// OBJECTS
const {sat ,...weekdays} = resturant.openinghours;
console.log(weekdays);

// 2) functions 
const add = function(...numbers){
    let sum = 0 ; 
    for(let i = 0 ; i < numbers.length ; i++)sum += numbers[i];
    console.log(sum);
};


add (2,3);
add(2,33,324,43);
add(3,3,323,32)

const x = [ 1,2,23];
add (...x);

resturant.orderpizza('mushrooms ', 'onions', 'tomatoes', 'pepperoni');
//the rest operator will take all the arguments and put them in an array that are remainig one after the first one


// spread operator   - because on right side of = 
// const newmenu = [ ...resturant.startmenu, 'noodles'];
// console.log(newmenu);

// const mainmenucopy = [...resturant.mainmenu];
// console.log(mainmenucopy);


// // join two arrays

// const newmenu1   = [...resturant.startmenu, ...resturant.mainmenu];    
// console.log(newmenu1);


//iterables arrays , strings , maps , sets not objects
const str = 'mohd arhan kaif';
const letters =  [...str,'', 's.'];
console.log(letters);

console.log(...str);

// const ingredients = [prompt ( " lets's make pasta ingrdiants"),
// prompt ( " lets's make pasta ingrdiants 2"), prompt 
// ( " lets's make pasta ingrdiants 3")
// ];
// console.log(ingredients);
// resturant.orderpasta(...ingredients);

// //objects 
// const newresturant = { founderin : 1988 , ...resturant, founder : 'mohd arhan kaif'};
// console.log(newresturant);


// const resturantcopy = {...resturant};
// resturantcopy.name = 'zam zam11 hotel';
// console.log(resturantcopy.name);
// console.log(resturant.name);


//loop arrays for of loop 

const menu = [...resturant.startmenu, ...resturant.mainmenu];
for (const item of menu ) console.log(item);
for (const item of menu.entries()) {
console.log(item)}; // EACH OF THE ITEMS ARE ARRAY NOW

console.log([...menu.entries()]);
for (const [ i , el ] of menu.entries()) {
    console.log(` ${i +1}, ${el}`);
};


//optional chaning

console.log(resturant.openinghours.sat?.open)
console.log(resturant.openinghours?.sat?.close)

for (const day of weekday){
    const open = resturant.openinghours[day]?.open??'CLOSED';
    console.log(` on ${day}, we open at ${open}`);
}
//methods
console.log (resturant.order.orfdjfd?.(0,1)?? "method doesnot exist");

const jon  = [{name : 'mak', class : "12++"}];
console.log(jon[0]?.name ?? "user empty");
console.log(jon[1]?.name ?? "user empty");

const properties = Object.keys(openinghours);
console.log(properties);

let openstr = ` we open at ${properties.length} days  :`;

for (const day of properties){
    openstr += ` ${day}`;
}
console.log(openstr);

//property value 
const values = Object.values(openinghours);
console.log(values);

//entire object
const entries= Object.entries(openinghours);
// console.log(entries);

    // for (  const x of entries){
    //     console.log(x)
    // }


    //destructuring the array ,keys and   values......[day is key and open and closee is object]
    for( const [day ,{open ,close} ] of entries){
        console.log(`on ${day} we open at ${open} and close at ${close}`);
    };
