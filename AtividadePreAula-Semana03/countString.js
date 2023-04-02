function countWords(str) {
    return str.trim().split(/\s+/).length;
  }
  
  let str = "hello world, how are you?";
  console.log(countWords(str)); // 5