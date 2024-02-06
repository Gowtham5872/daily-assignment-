// Print odd numbers in an array
let sum1=(...nums)=>{
    for(num of nums){
        if(num%2!=0){
            console.log(num);
        }
        }
    }
    sum1(1,2,3,4,5,6,7);


    // Convert all the strings to title caps in a string array
    let sum2 =(...nums)=>{

        let name2=[];
        for(let key of nums){
            let cap=key.split('')
            cap[0]=cap[0].toUpperCase();
            name2.push(cap.join(''));
        }
        console.log(name2);

    }
    sum2('apple','orange','dates');

    //Sum of all numbers in an array
   let sum3= (...nums)=>{
    let total=0;
    for(let key in nums){

    total=total+nums[key];
   
   }console.log(total);
}
sum3(1,2,3,4,5,6,7,8);

//Return all the prime numbers in an array
let sum4 =(...nums)=>{
   function isPrime(key){
    if(key<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(key);i++){
        if(key%i===0){
            return false;
        }
    } return true;
    }
   




function  printPrimeNumber(numbers){
    for(let key of numbers){
        if(isPrime(key)){
            console.log(key);
        }
    }
}





   printPrimeNumber(nums);
}
sum4(1,2,3,4,5,6,7,8,9);




//Return all the palindromes in an array

let sum5=(...words) =>{
    for (let key of words) {
        let reversedWord = key.split('');
        for (let i = 0; i < reversedWord.length / 2; i++) {
            // Swap characters
            let temp = reversedWord[i];
            reversedWord[i] = reversedWord[reversedWord.length - 1 - i];
            reversedWord[reversedWord.length - 1 - i] = temp;
        }
        if(key===reversedWord.join('')){
            console.log(key);
        }
    }
}
sum5('mango', 'madam', 'malayalam');




