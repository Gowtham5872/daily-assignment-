// print odd numbers in an array


let sum1=function(...nums){
    for(num of nums){
        if(num%2!=0){
            console.log(num);
        }
        }
    }
    sum1(1,2,3,4,5,6,7);


    // Convert all the strings to title caps in a string array
    let sum2 =function(...nums){

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
   let sum3=function (...nums){
    let total=0;
    for(let key in nums){

    total=total+nums[key];
   
   }console.log(total);
}
sum3(1,2,3,4,5,6,7,8);

//Return all the prime numbers in an array
let sum4 =function(...nums){
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

let sum5=function(...words) {
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




//Return median of two sorted arrays of the same size.


let sum6 =function(...nums){
    let num1=nums.flat();
    let num=parseInt(num1.length/2);
    if(num%2==0){
        console.log((num1[num]+num1[num-1])/2);
    
    }else{
        console.log(num1[num]);
    }

}
sum6([1,2,3,4],[1,2,3,4]);




//Remove duplicates from an array
let sum7=function(...nums){
    let num=[...new Set(nums)];
    console.log(num);
}
sum7(1,1,1,3,4,6,3,4);





// Rotate an array by k times
let sum8 = function(...nums) {
    return function(k) {
        let temp = [];
        k = k % nums.length; // Ensure k is within the array length

        for (let i = 0; i < k; i++) {
            temp[i] = nums[i];
        }

        for (let i = k; i < nums.length; i++) {
            nums[i - k] = nums[i];
        }

        for (let i = 0; i < k; i++) {
            nums[nums.length - k + i] = temp[i];
        }

        console.log(nums);
    }
}

sum8(1, 2, 3, 4, 5, 6)(3);
