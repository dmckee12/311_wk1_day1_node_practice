const split = (str, delim) => {
  // write code for strings.split
  const strSplit = str.split(delim);
  
  return strSplit;
};

const pairs = (str) => {
  
  // write code for strings.pairs
  if (!str) return [];
  let display = [];
  if (str.length % 2 !== 0) {
    str += "_";
  }
  for (let i = 0; i < str.length; i += 2) {
    display.push(`${str[i] + str[i + 1]}`);
  }
  return display;
};


const reverse = (str) => {
  
  // write code for strings.reverse
  return str.split("").reverse().join("");
};

module.exports = {
  split,
  pairs,
  reverse,
};