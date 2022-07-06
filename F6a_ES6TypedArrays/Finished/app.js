var buffer = new ArrayBuffer(8);
// stores 8 bytes
var view = new Int32Array(buffer);
// type array gives a way to deal with binary data in the buffer
// int32 means it stores 4 bytes for one number; we can only store two numbers 
view[0] = 5;
view[1] = 15;
console.log(view);