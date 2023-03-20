

// let lastName='Dahal';

// let firstName=new String('Unik');


// console.log(lastName);

// let b='  U    nik   ';

// let message=`Hello My Name is ${firstName} ${lastName}`;

// let words=message.split(' ');


let date=new Date();
let date2=new Date("8:00:30 Aug 11 2004 ")

let numbers=[1,2,3,4];

numbers.push(4,3,5);
numbers.unshift(0,2,3);

numbers.splice(2,0,'A','B','C','D');
console.log(numbers);

let courses=[
    {   no:1,
        fname:"Unik"},
    {
        no:2,
        fname:"Ajay"
    }
]

let course=courses.find(function(course){
    return course.no===1 && course.fname==="Unik";
})

//We can also write the predicate function/Callback Function as

course=courses.find(course=> course.no===1 && course.fname==="Unik");


//Removing an element 

//pop from last

numbers.pop();

//remove from first

numbers.shift();

numbers.splice(0,1);

let num1=[1,2,3];
let num2=[4,5,6];

// let combine=num1.concat(num2);

// let s=combine.slice(2,6);


//Spread Operator

let combine=[...num1,...num2];

//printing all element of array using for each

combine.forEach(value=>console.log(value)
)


