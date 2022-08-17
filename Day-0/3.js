// Write a program to decide given N is Prime or not.

let isPrime=(num)=>{
    if( num == 0 || num == 1) return false;
    else if( num%2 == 0 ) return false;
    else{
        for(let i=2; i<num; i++){
            if( (num % i) == 0) return false;
        }
    }
    return true
}
console.log(isPrime(7));
