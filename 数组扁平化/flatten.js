const flatten = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i])
    }
  }
  return result;
}

const arr = [1, [2, 3, 4, 5, [7, 8, 9]]]
const res = flatten(arr);
console.log(res);