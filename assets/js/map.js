"use strict";

// 1. Написать функцию, которая проверяет, являются ли два слова анаграммами. (Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов")

function anogram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let str1Arr = str1.split("").sort().join("");
  let str2Arr = str2.split("").sort().join("");
  return str1Arr === str2Arr;
}
console.log(anogram("колба", "бокал"));
//или через MAP==============================>
//приходит к примеру а, если а как ключа нету, тогда возвращает ключ и значение 1. Если а есть, ТО :  в letterCount получаем значение по ключу А. и в mapToStr добовляем А и 1; если прийдет еще одна а , то бубет А : 2
function createMap(str) {
  const mapToStr = new Map();
  for (let letter of str) {
    if (mapToStr.has(letter)) {
      const letterCount = mapToStr.get(letter);
      mapToStr.set(letter, letterCount + 1);
      continue;
    }
    mapToStr.set(letter, 1);
  }
  return mapToStr;
}

function compare(w1, w2) {
  if (w1.length !== w2.length) {
    return false;
  }
  const strNumber1 = createMap(w1);
  const strNumber2 = createMap(w2);
  if (strNumber1.size !== strNumber2.size) {
    return false;
  }
  for (const key of strNumber1.keys()) {
    if (strNumber1.get(key) !== strNumber2.get(key)) {
      return false;
    }
    return true;
  }
}
//==============================================>

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

//4. Написать функцию, которая принимает массив и возвращает новый массив, состоящий только из уникальных значений первого массива (значения не должны повторяться).

function test(arr) {
  let result = [];
  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
console.log(test([10, 20, 30, 40, 50, 10, 20, 30]));
//==========================================================>
function test2(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("only array");
  }
  return arr.filter(function (element, index, array) {
    return arr.indexOf(element) === index;
  });
}
