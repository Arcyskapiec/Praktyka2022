const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

const arrConcat = (a1, a2) => a1.concat(a2);
console.log(arrConcat(arr1, arr2));

const arrReverse = (a) => a.reverse();
console.log(arrReverse(arr1)[0]);

const arrFilter = (a) => a.filter((x) => x.length > 5);
console.log(arrFilter(arr2));

const arrReduce = (a) => a.reduce((x, y) => x + y);
console.log(arrReduce(numbers));

const arrMap = (a) => a.map((x) => x * x + 3);
console.log(arrMap(numbers));

const arrFilter2 = (a) => a.filter((x) => x.includes("ek") && x.length <= 5);
console.log(arrFilter2(arr2));

const arrFilter3 = (a) => a.filter((x) => x % 2 == 0);
console.log(arrFilter3(numbers));

const arrMin = (a) => a.reduce((x, y) => x > y ? x = y : x = x);
console.log(arrMin(numbers));
