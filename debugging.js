//Part 3: Find the culprits and nail them — debugging javascript
//Fix the code to get the largest of three.
aa = (f,s,t) => {
    if(f>=s && f>=t){
    console.log(f)}
    else if(s>=f && s>=t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);
   //output:the largest number is 3
   
   
   //Fix the code to Sum of the digits present in the number
   function add(n){
   let n = (1,2,3)
   for(var i=0;i<n.length;i++){
    sum+=n[i]
    }
    console.log(n[i]);
    return sum;
   }
   
   
   //Fix the code to Sum of all numbers using IIFE function
   const arr = [9,8,5,6,4,3,2,1];
   (function() {
       let sum = 0;
   
       function add(a,b,c,d,e,f,g,h) {
           return a + b + c + d + e + f + g + h;
       }
   
       console.log(add(9,8,5,6,4,3,2,1)); 
   }());
   
   
   //Fix the code to gen Title caps.
   var arr = [“guvi”, “geek”, “zen”, “fullstack”];
   function titleCase(str) {
       str = str.toUpperCase().split(' ');
       for (var i = 0; i < str.length; i++) {
         str[i] = str[i].charAt(0).tolowerCase() + str[i].slice(1); 
       }
       return str
     }
     console.log(titleCase("guvi", "geek", "zen", "fullstack"));
   
   
     //Fix the code to return the Prime numbers
     const newArray=[1,3,2,5,10];
     const myPrime=newArray.filter(newArray=>{
      for(let i=2;i<=newArray.length;i++){
      if(newArray%2===0)
      {
      return true;
      }
      }
      return newArray===1;
     });
     console.log(myPrime);
   
   
   
     //Fix the code to sum the number in that array
     var arr = [10, 20, 30, 40,50,60,70,80,90,100] 
     var sum = (a, b) =>
      a + b
     for(var i=0; i<30;i++){
     sum+= arr[i];
     }
     console.log(sum);
   
   
     //Fix the code to rotate an array by k times and return rotated array using IIFE function
     var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
     var k = 3;
     k = arr.length % k;
     (function() {
      out = arr.slice(k + 1, arr.length);
      var count = out.length;
      for (var i = 0; i < k + 1; i++) {
      out[count] = arr[i];
      count += 1;
      }
      console.log(out);
     })();
   
   
     //Fix the code to gen Title caps.
     var arr = [“guvi”, “geek”, “zen”, “fullstack”];
     for (var i = 0; i <= arr.length; i++) { 
       (function() {
   console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
      }
     })();
   
   
     //print all odd numbers in an array using IIFE function 
     var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
   var odd = [];
   
   var oddNumbers = function(nums) {
       for (var i = 0; i < nums.length; i++) {
   
           if ((nums[i] % 2) == 1) {
               odd.push(nums[i]);
                   console.log(odd);
           }
           else {
               even.push(nums[i]);
                   console.log(even);
           }
       }
   
   };
   
   oddNumbers(nums);
   
   
   //Fix the code to reverse.
   // Function to reverse string
   (function(str) {
     str1 = str.split('').reverse().join('')
    console.log(str1);
   })("abcd")
    
   
   //Fix the code to remove duplicate
       function toUniqueArray(arr){
      var newArr = [];
     for(var i=0; i < arr.length; i++){
     if(newArr.indexOf(arr[i]) === -1) {
     newArr.push(arr[i]);
     } }
     return newArr;
    }
    var res[“guvi”,”geek”,”guvi”,”duplicate”,”geeK”]
    var resUnique=toUniqueArray(res);//["guvi","geek","duplicate",]