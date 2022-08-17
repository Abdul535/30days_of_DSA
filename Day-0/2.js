//2) Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd
// Numbers.

let generateEvenOdd = (num) => {
    console.log("Odd numbers are");
    for( let i=1; i<num; i+=2){
        console.log(i);
    }
    console.log("Even numbers are");
    for( let j=2; j<num; j+=2){
        console.log(j);
    }

}
generateEvenOdd(10);

//Generate N even numbers
let genEven = (num) =>{
    let i=2;
    let count = 0;
    while( count < 10){
        console.log(i)
        i+=2;
        count++;
    }
}
genEven(10);


//Generate N odd numbers
let genOdd = (num) =>{
    let i=1;
    let count = 0;
    while( count < 10){
        console.log(i)
        i+=2;
        count++;
    }
}
genOdd(10);