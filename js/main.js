// 1. Задача (Рекурсия)
// Дано натуральное число n. Выведите все числа от 1 до n.

// function nNum(n) {
//   console.log(n);
//   if (n >= 5) {
//     return;
//   } else {
//     nNum(n + 1);
//   }
// }
// nNum(0);

// 2. Задача (Рекурсия)
// Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
//  или в порядке убывания в противном случае.

// function secRecorsion(a, b) {
//   console.log(`a : ${a} \n b: ${b}`);
//   if (a === b) {
//     return;
//   } else if (a < b) {
//     return secRecorsion(a + 1, b);
//   } else if (a > b) {
//     return secRecorsion(a - 1, b);
//   }
// }
// secRecorsion(3, 10);

// 3. Задача (Рекурсия)
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы (ну и циклы, разумеется).
// let sum = 0;
// function recFour(n) {
//   let current = 0;
//   if (n === 0) {
//     return;
//   } else {
//     current = n % 10;
//     n = (n - current) / 10;
//     sum += current;
//     return recFour(n);
//   }
// }
// recFour(123);
// console.log(sum);

// 4. Задача (Рекурсия)
// Дано натуральное число N. Выведите все его цифры по одной,
//  в обратном порядке, разделяя их пробелами или новыми строками.
// При решении этой задачи нельзя использовать строки,
//  списки, массивы (ну и циклы, разумеется).
//  Разрешена только рекурсия и целочисленная арифметика.

// 5. Задача (Рекурсия)
// Дано натуральное число N. Выведите все его цифры по одной,
//  в обычном порядке, разделяя их пробелами или новыми строками.
// При решении этой задачи нельзя использовать строки, списки,
// массивы (ну и циклы, разумеется). Разрешена только рекурсия и
//  целочисленная арифметика

// 6. Задача (ООП)
// Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия),
// rate (ставка за день работы), days (количество отработанных дней).
//  Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//  Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
// }
// const petya = new Worker("Petya", "Vashev", 22, 16);

// const dima = new Worker("Дима", "Диманов", 10, 31);

// console.log(petya.getSalary() + dima.getSalary());

// 7. Задача (ООП)
// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// сделайте все его свойства приватными,
// а для их чтения сделайте методы-геттеры.

// class Worker {
//   constructor(options) {
//     this.name = options.name;
//     this.surname = options.surname;
//     this.rate = options.rate;
//     this.days = options.days;
//   }
//   set name(name) {
//     this._name = name.trim().toLowerCase();
//   }
//   set surname(surname) {
//     this._surname = surname.trim().toLowerCase();
//   }
//   set days(days) {
//     this._days = days;
//   }
//   set rate(rate) {
//     this._rate = rate;
//   }
//   get name() {
//     return this._name;
//   }
//   get surname() {
//     return this._surname;
//   }
//   get rate() {
//     return rhis._rate;
//   }
//   get days() {
//     return this._days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
// }
// const vasya = new Worker({
//   name: "Vasya",
//   surname: "Pupkin",
//   rate: 20,
//   days: 7,
// });

// const petya = new Worker({
//   name: "Petya",
//   surname: "Vashev",
//   rate: 22,
//   days: 16,
// });
// console.log(`vasya Rate:${vasya._rate} \n Petya days: ${petya._days}`);

// 8. Задача (ООП)
// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// class Worker {
//   constructor(options) {
//     this.name = options.name;
//     this.surname = options.surname;
//     this.rate = options.rate;
//     this.days = options.days;
//   }
//   // Setters
//   set name(name) {
//     this._name = name.trim().toLowerCase();
//   }
//   set surname(surname) {
//     this._surname = surname.trim().toLowerCase();
//   }
//   set days(days) {
//     this._days = days;
//   }
//   set rate(rate) {
//     this._rate = rate;
//   }
//   // Getters
//   get name() {
//     return this._name;
//   }
//   get surname() {
//     return this._surname;
//   }
//   get rate() {
//     return rhis._rate;
//   }
//   get days() {
//     return this._days;
//   }
//   // Methods
//   getSalary() {
//     return this.rate * this.days;
//   }
//   setRate(workingRate) {
//     this._rate += workingRate;
//     return console.log(`with bonus rate ${this._name} have now: ${this._rate}`);
//   }
//   setDays(workingDays) {
//     this._days += workingDays;
//     return console.log(
//       `with new working days ${this._name} have now: ${this._days}`
//     );
//   }
// }

// const vasya = new Worker({
//   name: "Vasya",
//   surname: "Pupkin",
//   rate: 20,
//   days: 7,
// });

// const petya = new Worker({
//   name: "Petya",
//   surname: "Vashev",
//   rate: 22,
//   days: 16,
// });

// 9. Задача (ООП)
// Реализуйте класс MyString, который будет иметь следующие методы:
// метод reverse(), который параметром принимает строку, а возвращает
// ее в перевернутом виде, метод ucFirst(), который параметром принимает
// строку, а возвращает эту же строку, сделав ее первую букву заглавной
// и метод ucWords, который принимает строку
//  и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//   constructor() {}
//   reverse(string) {
//     return string.split("").reverse().join("");
//   }
//   ucFirst(string) {
//     return string[0].toUpperCase() + string.slice(1);
//   }
//   ucWords(string) {
//     let arr = string.split(" ");
//     let newString = "";
//     for (let i = 0; i < arr.length; i++) {
//       newString += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
//     }
//     return newString;
//   }
// }
// let str = new MyString();
// console.log(str.reverse("abcde"));
// console.log(str.ucFirst("abcde"));
// console.log(str.ucWords("abcde abcde abcde"));

// 10. Задача (ООП)
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
//  Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до
// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   getFullName() {
//     return `Name :${this.name} Surname: ${this.surname}`;
//   }
// }
// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getFullName() {
//     return `Name :${this.name} Surname: ${this.surname}`;
//   }
//   getCourse() {
//     let date = new Date();
//     let dataNow = date.getFullYear();
//     let courseStudent = dataNow - this.year;
//     if (courseStudent > 5) {
//       return `Студент уже выпустился`;
//     } else {
//       return `Студент на ${courseStudent} курсе т.к текущий год ${dataNow}`;
//     }
//   }
// }

// const sasha = new Student("Sasha", "Zaitsev", 2010);
// const capello = new Student("Volodimir", "Kapshuk", 2017);

// 12 . Задача (функции работы с массивами)
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let arr = ["a", "b", "c"];
// let secondArr = [1, 2, 3];
// function stick(arrayOne, arrayTwo) {
//   return arrayOne.concat(arrayTwo);
// }
// console.log(stick(arr, secondArr));

// 13. Задача (функции работы с массивами)
// Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// function pushPro() {
//   let arr = ["a", "b", "c"];
//   for (let i = 1; i <= 3; i++) {
//     arr.push(i);
//   }
//   console.log(arr);
// }
// console.log(pushPro());

// 14. Задача (функции работы с массивами)
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// function inStart() {
//   let arr = [1, 2, 3];
//   arr.unshift(4, 5, 6);
//   console.log(arr);
// }
// inStart();

// 15. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода
//  slice запишите в новый элементы [1, 2, 3].

// function sliceArray() {
//   let arr = [1, 2, 3, 4, 5];
//   let newArray = arr.slice(0, 3);
//   console.log(newArray);
// }
// sliceArray();

// 16. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// function sliceFinish() {
//   let arr = [1, 2, 3, 4, 5];
//   let newArray = arr.slice(3);
//   console.log(newArray);
// }
// sliceFinish();

// 17. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// function illusionSlice() {
//   let arr = [1, 2, 3, 4, 5];
//   arr.splice(arr.length - 4, 2);
//   console.log(arr);
// }
// illusionSlice();

// 18. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода
// splice запишите в новый массив элементы [2, 3, 4].
// function spliceNew() {
//   let arr = [1, 2, 3, 4, 5];
//   let newArray = arr.splice(1, 3);
//   console.log(newArray);
// }
// spliceNew();

// 19. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]

// function stickSplice() {
//   let arr = [1, 2, 3, 4, 5];
//   arr.splice(2, 0, "a", "b", "c");
//   console.log(arr);
// }
// stickSplice();

// 20. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// function spliceSplice() {
//   let arr = [1, 2, 3, 4, 5];
//   arr.splice(2, 0, "a", "b");
//   arr.splice(6, 0, "c");
//   arr.splice(arr.length + 1, 0, "e");
//   console.log(arr);
// }
// spliceSplice();

// 21. Задача (функции работы с массивами)
// Дан объект {js:'test', jq: 'hello', css: 'world'}.
// Получите массив его ключей.
// function keysInObj() {
//   let obj = {
//     js: "test",
//     jq: "hello",
//     css: "world",
//   };
//   console.log(Object.keys(obj));
// }
// keysInObj();
