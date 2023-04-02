function fatorial(num) {
    if (num == 1 || num == 0) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
  }
  
  let num = 5;
  console.log(fatorial(num)); // 120