const { numbers } = require("..");

const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 == 0;
};

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((num1, num2) => num1 + num2, 0);
};

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  const addnums = {};
  for (let i = 0; i < arr.length; i += 1) {
    const num = arr[i];
    const combo = sum - num;
    if (combo in addnums) return true;
    addnums[num] = i;
  }
  return false;
};

module.exports = {
  isEven,
  sum,
  comboSum,
};;