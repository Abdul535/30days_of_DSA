// 4) Write a program to subtract two integers without using Minus (-) operator

//a b borrow diff
//0 0   0     0 
//0 1   1     1
//1 0   0     1 
//1 1   0     0 

//diff XOR a^b
//borrow  ~a & b  //AND 11->1

let minus= (n1,n2) => {
    while( n2 != 0){
        let borrow = (~n1) & n2;
        n1 = n1 ^ n2;
        n2 = borrow << 1;
    }
    return n1;
}
console.log(minus(4,2));

//4 --> 0100 
//2 --> 0010 

// borrow --> 1011
        //    0010
        //    ----  
        //    0010  (2)
// n1 ----> 1011
      //    0010
      //    ----  
      //    1001 (9)
//n2 ----> 0010 << 1 ===> 00101 (5)


