// distructuring an arrray

// const arr = [1, 2, 3, ];

// const [a, b, c] = arr; 
// console.log(a, b, c);
// console.log(arr);

const resturant = {
    name: ' zam zam hotel',
    location: 'kathmandu',
    categories  : ['italian', 'chinese', 'american'],
    startmenu : ['pizza', 'pasta', 'burger'],
    mainmenu : [ 'paneer', 'dosa', 'burger'],
    openinghours  : {

        MON : {
            open : '9:00',
            close : '18:00'
        },
        TUE : {
            open : '9:00',
            close : '18:00'
        },
        WED : {
            open : '9:00',
            close : '18:00'
        }

    },
    order  : function(starterindex,mainindex){
        return  [this.startmenu[starterindex], this.mainmenu[mainindex]];

    },
        orderdelivery  : function({starterindex = 1,mainindex =0 ,time= "12:00", address = "kamptee"}){
        console.log([` order recieved  ${this.startmenu[starterindex]}, ${this.mainmenu[mainindex]} to  ${address} at ${time} `]);

    }
    
};


resturant.orderdelivery({starterindex:0, mainindex:1, time: "12:08", address: "kathmandu"});


//destructuring an object

const {name , openinghours, categories} = resturant;
console.log(name, openinghours, categories);

const {name :restaurantname,
    
    openinghours:hours,
    categories : tags,
    
    } = resturant;

    console.log(restaurantname, hours, tags);

    // defualt values
    const {  startmenu: starters = []} = resturant;
    console.log( starters);
// mutating variables
let a = 111;
let b = 999;
const obj  = {a :23, b :45, c:67};

({a,b} = obj);  // cant start with {}  it will show syntax error
console.log(a,b);


//nested object

const {
    MON :{open : O, close:C}
} = openinghours;
console.log(O, C);

let [main,  ,secondary] = resturant.categories;

// switching the order of the array
// const temp  = main ; 

// secondary = temp ;
// secondary = main  ;
// console.log(main, secondary);


[main , secondary] = [secondary, main];
console.log(main, secondary);


// receive 2 return value from the function
const [starter, maincourse ] = (resturant.order(0,0));
console.log(starter,maincourse);


const nested = [ 2,4,[5,6]];

// const [i,,j] = nested;
// console.log(i,j);

const [i,,[j,k]] = nested;
console.log(i,j,k);

const [ p= 1,q = 1, r= 1] = [8];
console.log(p,q,r);

