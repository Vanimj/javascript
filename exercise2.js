//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...
var i=1;
console.log("The value of i in the loop is :");
while(i<=10)
{
    console.log(i);
    i++;

}



/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...
function sum(x,y)
{
 return x+y;

}
function mul(z)
{
    var sum1=sum(30,2);
    var multres=sum1*z;
    return (multres);
}
var res=mul(20)/exp(10);
console.log("The final result of this expression is" +" "+res);
function exp(a)
{
    return a*a;
}

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""
/********************************************************************* */
20;
if(20)
{
    console.log("true");
    console.log("it returns true, ")

    }
    else
    console.log("false");
    0;
    if(0)
    {
        console.log("true");
            }
            else
            console.log("false");
            console.log("in javascript, 0 is considered as falsy value when evaluated in if-else statement");
            "zero";
            if("zero")
            {
                console.log("true");
                console.log("string value is truthy as it is not empty");
            }
            else
            console.log("false");
            const zero=20;
            if(zero)
            {
                console.log("true");
                console.log("constants cannot be typed to boolean");
            }
            else
            console.log("false");
    null;
    if(null)
{
    console.log("true");

}
else
console.log("false");
console.log("null is a falsy value in javascript ");
"0";
if("0")
{
    console.log("true");
    console.log("string is truthy")
    }
    else
    console.log("false");
    !"";
    if(!"")
    {
        console.log("true");
        console.log("it is truthy, as it is not in the falsy list");
    }
    else
    console.log("false");
    {};
    if({})
    {
        console.log("true");
    }
    else
    console.log("false");
    125;
    if(125)
    {console.log("true");
    console.log("it  is a number");
}
else
console.log("false");
undefined;
if(undefined)
{
    console.log("true");
    }
    else
    console.log("false");
    console.log("undefined is falsy in javascript");
    "";
    if("")
    {
        console.log("true");
    }
    else
    console.log("false");
    console.log("empty string is a falsy in javascript");
    () => {console.log("hello TEKcamp!")}
    if(() => {console.log("hello TEKcamp!")})
    {
        console.log("true");
        console.log("arrow function returns something when evaluated, is truthy in javascript");
    }
    else
    console.log("false");
    console.log(`() => {console.log("hello TEKcamp!"); is ${!!(() => {console.log("hello TEKcamp!");})} because functions are truthy`)
    if(console.log(`() => {console.log("hello TEKcamp!"); is ${!!(() => {console.log("hello TEKcamp!");})} because functions are truthy`))
    {
        console.log("true");
    }
    else
    console.log("false");


/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}
/*********************************************************************** */
const  day = "tuesday";

switch(day)
 {
  case "monday":

    console.log("we got a long week ahead of us...");
    break;
case "tuesday":
   console.log("tuesday's are still beterr than mondays, but LONG way to go still");
   break;
case "wednesday" :
    console.log("We are smack dab in the middle of the week");
    break;
case "thursday":
    console.log("Thursday night... the mood is right");
    break;
case "Friday":
    console.log("TGIF.  Friday truly is the best day of the week!");
    break;
default:
    console.log("It's a weekend!")
}


/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}
/****************************************************************** */
const age = 10;
  age > 21 ? console.log("adult"): console.log("minor");

  (age > 13 && age < 19) ? console.log('teen'):console.log("not a teenager");

   age > 65 ? console.log("retired") : console.log("still working...");



/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
var Vani={
    name:'Vani',
    age:38,
    gender:'F',
    hobbies:['Reading','Cooking'],
    profession:'Automation Tester',
    education:'Master of Computer Applications',
    learn:function(){
        console.log(this.name);
    } ,
    fullname:function()
    {
       console.log(this.name.concat('Muppuru'));
    }
}
Vani.learn();
Vani.fullname();


/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...


// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

var ball={
    name:"Football",
    color:"Red",
    shape:"round",
    size:"medium",
    
    throw:function(){
        console.log("you can throw "+" "+this.name+" "+"easily as it is"+" "+this.shape);
    },
    kick:function(){
        console.log(this.name+" "+"goes faster when kicked");
    }
    
    
}
ball.throw();
ball.kick();


/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...

console.log(favDatatypes(Boolean));



function favDatatypes(type)
{
    switch(type)
    {
        case String:  console.log("I like String datatype, as it is immutable");
        break;
        case Boolean: console.log("I like Boolean, as it returns true or false values");
        break;
        case Array:  console.log("I like Array, as it stores multiple values in single var");
        break;
        default: console.log("String, Boolean, Array");
    }
    
}

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...

function multiple(x)
{
    return function(y)
    {
        return y*x;
    }
     
}

   let tripleFunction = multiple(3); 
   
console.log("Triple number :"+" "+tripleFunction(20));

// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...

function stockGain(basis)
{
    msg="is how much stock has increased";
    return function(yrs)
    {
        var r=0.05;
        return r*basis*yrs;
    }
}
var futureValue=stockGain(3500);
console.log(futureValue(3));
