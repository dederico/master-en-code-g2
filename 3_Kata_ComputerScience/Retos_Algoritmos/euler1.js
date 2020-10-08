/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

<--Entradas-->
---------
numeros del 0 al 1000 
.........................

<--Salidas-->
----------
suma de todos los numeros multiplos de 3 y 5

*/

const multiple = () => {
  let sum = 0;
  //console.log(number.toString());
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      // console.log(sum);
      // console.log(typeof i);
      // let num = i.toString();
      // console.log(typeof num);
      // console.log(num);
      // let result = Array.from(num);
      // console.log(typeof result);
      // console.log(result);
      // let sum = [i];
      // let sumArray = sum.slice().join();
      // console.log(sumArray);
      // console.log(sum + " this number is multiple of 3 or 5 ");
      // console.log(sumArray);

      //   for (let j = 0; j < sum.length; j++) {
      //     console.log(sum.length);
      //     console.log([i]);
      //     let result = [i] + sum;
    }
  }
  return sum;
};

console.log(multiple());
