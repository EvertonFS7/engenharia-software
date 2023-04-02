function average(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
  }
  
  let arr = [2, 4, 6, 8, 10];
  console.log(average(arr)); // 6