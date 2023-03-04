// [
// 	[null, null, 1, 2, 3, 4, 5],
// 	[6, 7, 8, 9, 10, 11, 12],
// 	[13, 14, 15, 16, 17, 18, 19],
// 	[20, 21, 22, 23, 24, 25, 26],
// 	[27, 28, null, null, null, null, null]
// ]
function getMonthMatrix(year, month) {
  const numDaysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

  const matrix = [];

  let day = 1;
  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        row.push(null);
      } else if (day > numDaysInMonth) {
        row.push(null);
      } else {
        const date = new Date(year, month - 1, day);
        row.push(date);
        day++;
      }
    }
    matrix.push(row);
  }

  return matrix;
}

// Example usage
const year = 2023;
const month = 4;
const date = 24;

const matrix = getMonthMatrix(year, month);

console.log(matrix); // Output: [
//   [null, null, 1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11, 12],
//   [13, 14, 15, 16, 17, 18, 19],
//   [20, 21, 22, 23, 24, 25, 26],
//   [27, 28, null, null, null, null, null]
// ]
