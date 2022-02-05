//Write a code to print the numbers in the array
let removeComma= () => {
    let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    console.log (numsArr.join(''));
}

removeComma();

//1234567891011


//Write a code to print the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
new_string = ","
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i] + join(",")  
console.log(new_string);
//1,2,3,4,5,6,7,8,9,10,11

//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = " " 
 
for (var i = 11; i > 0; i--) {
 new_string += numsArr[i]
}
console.log(new_string.trim());
//Output: 11 10 9 8 7 6 5 4 3 2 1


//Write a code to replace the array value — If the number is even, replace it with ‘even’.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
     numsArr[i] = 'even'
 
 }
}
console.log(numsArr);
//Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

//Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 console.log(numsArr) // 'display the even number'
 }
else 
numsArr[i] = 'even'
}
console.log(numsArr);


//Write a code to add all the numbers in the array
const numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += numsArr[i];
}
console.log(sum);
}
//66



//Write a code to add the even numbers only
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];

const sumEvens = (numsArr) => {
  let sum = 0;
  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 === 0) {
    sum = sum + numsArr[i];
    }
  }
  return sum;
}
 
console.log(sumEvens(numsArr))

//Write a code to add the even numbers and subract the odd numbers
var numsArr8 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2=100;
for (var i = 0; i <=10; i++) {
 if(numsArr8[i]%2==0)//error !=and,
 {
 sum2 += numsArr8[i]
 }
 else
 {
 sum2 -= numsArr8[i]
 }
}
console.log(sum2);
//output:94


//Write a code to print inner arrays
var numsArr9 = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr9.length; i++); {
 console.log( numsArr9[i].length,numsArr9[i])
}
//output:Array(5) [ 1, 2, 3, 4, 5 ]
//Array(6) [ 6, 7, 8, 9, 10, 11 ]


//Write a code to print elements in the inner arrays
var numsArr88 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr88.length; i++) {
 var inner_array = numsArr88[i];
 for(var j = 0 ; j < inner_array.length;i++ )
     str_all +=inner_array[j]
}
console.log(str_all);


//Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr30 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all30=0;
for (var i = 0; i < numsArr30.length; i++) {
 var inner_array30 = numsArr30[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(numsArr30[i][j] %2 == 0 )
      {
         numsArr30[i][j] = even
       }
}
console.log(numsArr30);
//output:[ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]


//Write a code to print elements in the inner arrays in reverse
var numsArr31 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = numsArr31.length-1; i >= 0; i--) {
 var inner_array = numsArr31[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- )
     str_all +=numsArr31[i][j]+""
}
console.log(str_all);
//Output: 11 10 9 8 7 6 5 4 3 2 1



//Write a code to add elements in the inner arrays based on odd or even values
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i][j]%2!=0)
 {
 sum_odd += numsArr[i][j]
 }
 else
 {
 sum_even += numsArr[i][j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);
Output:
36
30
