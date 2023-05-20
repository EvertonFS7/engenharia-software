function longestWord(str) {
    let arr = str.match(/\w+/g);
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
    return longest;
  }
  
  let str = "hello world, how are you?";
  console.log(long)