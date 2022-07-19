
//Appends Hello to entered name
function sayHello(){
    let uName=prompt("Enter your name")
    console.log("Hello", uName)
}

//Checks if number is even oo odd
function evenOdd(){
    let myNumber=prompt("Enter any number")
    if(myNumber%2==0){
        console.log(myNumber, "is an EVEN number!")
    }
    else{
        console.log(myNumber, "is an ODD number!")
    }
}

//Checks if number is Prime or not
function isPrime(){
    let myNumber=prompt("Enter any number")
    let i = 1, j = 0;
     
      while (i <= myNumber) {
        if (myNumber % i == 0) 
        j++;
        i++;
      }
     
      if (j == 2) {
        console.log(myNumber, "is Prime Number");
      } else {
        console.log(myNumber, "is Not Prime Number");
      }
}

//Prints math table for the entered number
function printTable(){
    let myNumber=prompt("Enter any number")
    let i=1;
    while(i<=10){
        console.log(i*myNumber)
        i++
    }
}