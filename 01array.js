
console.log("hello");


var fullwordlist=['1','2','3','4','5'];//decalre  and initialize first array
var wordstoremove=['1','2','3'];//decalre  and initialize secondt array
var duplicates=fullwordlist.filter(function(value)//find duplicates
//i am using the filter method to filter out elements that are not present in both arrays

{
   
    return wordstoremove.indexOf(value)>-1; //the index of method is used to check if an elements is present in the second array
    
});
console.log(duplicates);//print the duplicate elements in console.


var samevalues=fullwordlist.filter(function(value)//find same values
{
    return wordstoremove.indexOf(value.toString)===-1;//the index of method is used to check if an elements also check the equality of elements with datatype is present
});
console.log(samevalues);//print the same elements in console