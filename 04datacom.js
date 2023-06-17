let val1= "7">7;//The first two values are comparing a string with a number.
//when comparing a string with a number, the string is converted to a number. 
//In this case, `"7"` is converted to the number `7`. Since `7` is not greater than `7`
// the first comparison returns `false`.


console.log(val1); 


console.log("2">"21")//Similarly, `"2"` is converted to the number `2`, and `"21"` is converted to the number`21`. Since `2` is not greater than `21`, the second comparison also returns `false`.
; 
let val3= "KL" >"S";
console.log(val3);//The third comparison is comparing two strings. When comparing two strings in JavaScript, the comparison is done character by character based on their Unicode values. In this case, `"K"` has a higher Unicode value than `"S"`, so `"KL"` is greater than `"S"`, and the third comparison returns `true`.
