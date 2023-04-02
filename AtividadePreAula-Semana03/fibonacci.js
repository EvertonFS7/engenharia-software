function fibonacci(num) {
    let arr = [0, 1];
    for (let i = 2; i <= num; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr.slice(0, num);
  }
  
  // Exemplo de uso:
  let num = 8;
  console.log(fibonacci(num)); // [0, 1, 1, 2, 3, 5, 8, 13]