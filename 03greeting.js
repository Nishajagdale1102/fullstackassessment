let obj1={"greeting":"hello"};//The code creates an object `obj1` with a property `"greeting"` set to `"hello"`.
let obj2=obj1;// it creates another variable `obj2` and assigns it the value of `obj1`. This means that `obj2` is a reference to the same object as `obj1`.

obj1["greeting"]="bye";//Next, the code changes the value of the `"greeting"` property of `obj1` to `"Bye"`. Since `obj2` is a reference to the same object as `obj1`, it also reflects this change.
console.log(obj1);
console.log(obj2);

 
 //Therefore, both `console.log()` statements output `{ greeting: 'Bye' }`.