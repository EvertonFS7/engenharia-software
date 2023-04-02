function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  let str = "hello world";
  console.log(reverseString(str)); // "dlrow olleh"