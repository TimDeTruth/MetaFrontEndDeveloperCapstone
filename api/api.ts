/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Function to generate a seeded random number
export const seededRandom = function (seed: number) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

// Function to fetch API data based on the date
export const fetchAPI = function (date: Date) {
  let result: string[] = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  // console.log("the results", result);
  return result;
};

// Function to submit form data
export const submitAPI = function (formData: any) {
  return true;
};

// const seededRandom = function (seed) {
//   var m = 2 ** 35 - 31;
//   var a = 185852;
//   var s = seed % m;
//   return function () {
//     return (s = (s * a) % m) / m;
//   };
// };

// const fetchAPI = function (date) {
//   let result = [];
//   let random = seededRandom(date.getDate());

//   for (let i = 17; i <= 23; i++) {
//     if (random() < 0.5) {
//       result.push(i + ":00");
//     }
//     if (random() < 0.5) {
//       result.push(i + ":30");
//     }
//   }
//   return result;
// };
// const submitAPI = function (formData) {
//   return true;
// };
