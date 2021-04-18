"use strict";

// 1. Написать функцию, которая проверяет, являются ли два слова анаграммами. (Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов")

function anogram(str1, str2) {
  if (str1.length === str2.length) {
    let str1Arr = str1.split("").sort().join("");
    let str2Arr = str2.split("").sort().join("");
    if (str1Arr === str2Arr) return true;
  }
  return false;
}
console.log(anogram("колба", "бокал"));

//Написать функцию, которая подсчитывает количество гласных в строке.
function sumVowels(str) {
  let vowels = str.split("");
  const result = vowels.filter(function (item) {
    if ("ауоыиэяюёе".includes(item)) {
      return item;
    }
  });
  return result.length;
}
console.log(sumVowels("привет"));

//3. Написать функцию, которая принимает массив с числами и возвращает новый массив, который содержит отрицательные числа из первого массива.

function getMinus(...args) {
  let newArr = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < 0) {
      newArr.push(args[i]);
    }
  }
  return newArr;
}
console.log(getMinus(-10, 20, 30, 40, -190, 344, -50));

//
