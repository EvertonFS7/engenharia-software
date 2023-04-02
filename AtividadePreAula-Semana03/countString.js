function countWords(str) {
    return str.trim().split(/\s+/).length;
  }
  
  // Exemplo de uso:
  let str = "hello world, how are you?";
  console.log(countWords(str)); // 5