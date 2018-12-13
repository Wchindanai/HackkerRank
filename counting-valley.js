// Complete the countingValleys function below.
const D = "D";
const U = "U";
function countingValleys(n, s) {
  let result = 0;
  let uphill = "";
  let downhill = "";
  let latestChar = "M";
  let seaLevel = 0;
  s.forEach(element => {
    if (element === latestChar) {
      switch (element) {
        case U:
          uphill += element;
          seaLevel += 1;
          break;
        case D:
          downhill += element;
          seaLevel -= 1;
          break;
      }
      if (
        uphill.length === downhill.length &&
        uphill.length > 0 &&
        downhill.length > 0
      ) {
        result += 1;
      }
    }
    latestChar = element;
  });
  if (seaLevel < 1) return 1;
  return result;
}

const result = countingValleys(12, [D, D, U, U, D, D, U, D, U, U, U, D]);
console.log(result);
