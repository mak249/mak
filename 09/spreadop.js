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


// -------------------🔗⛓️optional chaning⛓️🔗---------------------

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

// sets
// can hold unique value 
// duplicate value is not printed
    const orderset = new Set([
        'pizza',
        'pasta',
        'maggi',
        'risatto',
        'maaggi','pasta'
    ]);
    console.log(orderset);
    console.log(new Set('jonas'));

    console.log(orderset.size);
    console.log(orderset.has('maggi'));
    orderset.add('poha');
    orderset.delete('pizza');
    console.log(orderset);
    // orderset.clear(); for deleting all elements
    
    for (const order of orderset ) console.log( order);

    //example 

    const staff = [ 'waiter', 'chef', 'waiter','manager','chef','waiter'];

    const uniquestaff = [...new Set(staff)];
    console.log(uniquestaff);

    console.log(new Set('mohd arhan kaif').size);

    // -----------------------🗺️ maps 🗺️--------------------------//

    const rest  = new Map();
    rest.set('name','kamptee');
    rest.set(1, 'nagpur','italy')
    
    console.log(rest.set(2,'lisbon ','portugal'))
    rest.set('categories',['italian', 'pizzarian','vegitarin','organic']).set('open', 23)
    .set('close',23)
    .set(true,'we are open')
    .set(false,'we are closed');
    console.log(rest.get('name'));
    console.log(rest.get(true))
    console.log(rest.get(1));


    const time = 21; 
    console.log (rest.get(time > rest.get('open') && time < rest.get('close')));

    console.log(rest.has('categories'));
    rest.delete(2);
    console.log(rest);  
    // rest.clear();
    const arrr =[1,2];
    rest.set(arrr, 'test')
    rest.set([1,2],'test');
    // rest.set(document.querySelector('h1'),'heading');
    console.log(rest.size);
    console.log(rest.get([1,2])); // will not map towards test so we need to create an arry for that 
    console.log(rest.get(arrr));   // now it will map towards to its value

    


    const questions = new Map([
        ['question','what is the best programming language in the world']
    ,[1 , 'c'],
    [2,' java'],
    ['javasript',3],
    ['correct',3],
    [true,'correct'],
    [false, 'try again']
    ]);
    console.log(questions);
    