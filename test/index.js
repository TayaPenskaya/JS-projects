'use strict';
// function camelize(str) {
//     let str1 = str.split('-');
//     let str2 = str1.map((item, index, arr) => {
//         if (index > 0){
//             item = item[0].toUpperCase() + item.slice(1);
//         }
//         return item;
//     });
//     return str2.join('');
// }
//
// console.log(camelize('asd-sd'));
// console.log(camelize('tree-binary'));
//
//
// function filterRange(arr, a, b) {
//     return arr.filter(item => item >= a && item <= b);
// }

// let arr = [1,2,3,4,5,6];
// console.log(filterRange(arr, 2, 4));

//
// let arr = [5, 2, 1, -10, 8];
// let arr1 = [1,2,3];
//
// console.log(arr.concat(arr1));
// console.log(arr1.reduce((prev, item) => {return prev + item},0));

// let id = Symbol("id");
// let obj = {
//     [id] : 1,
//     name : "taya",
//     password: 123,
// };

// let id1 = Symbol.for("id");
// let name = Symbol.keyFor(id1);

// obj.name = "asd";

// console.log(JSON.stringify(obj));
// console.log(obj[id]);
// console.log(id === id1);
// console.log(id1.description);
//

// let calc = {
//     var1 : 2,
//     var2 : 3,
//     mul() {
//         console.log(this.var1 * this.var2)
//     }
// };
//
// calc.mul();

// let obj = {};
// function A() {
//     return obj;
// }
//
// function B() {
//     return obj;
// }
//
// let a = new A();
// let b = new B();
//
// console.log(a === b);

// let A = [];
// console.log(typeof A);

// let cat = {
//     name : "Jerry",
//     start : 0,
//     cash : 7,
//     sayMya() {
//         console.log("mya");
//     },
//     [Symbol.toPrimitive](hint) {
//         console.log(hint);
//         return hint === "string" ? `name : ${this.name}` : `cash: ${this.cash}`;
//     }
// };
//
// cat[Symbol.iterator] = function () {
//     return {
//         current : this.start,
//         last : this.cash,
//
//         next() {
//             console.log(this);
//             if (this.current <= this.last) {
//                 return {done: false, value: this.current++};
//             } else {
//                 return {done: true};
//             }
//         }
//     };
// };

// console.log(Object.keys(cat));

// console.log(cat + 50);
// console.log(cat);

// for (let value of Object.values(cat)) {
//     console.log(value);
// }

// for (let i of cat) {
//     console.log(i);
// }

//
// let map = new Map([[1,2],[3,4]]);
// console.log(map.keys());
//
// let map1 = Object.entries(cat);
// console.log(map1);
//
// let set = new Set([1,2,3,1]);
// console.log(set);

// let weakMap = new WeakMap();
// let john = {name : "John"};
// weakMap.set(john, "1");
//
// john = null;
// console.log(weakMap.get(john));
//
// let weakSet = new WeakSet();
// let j = {name : "Jerry"};
// weakSet.add(j);
//
// j = null;
// console.log(weakSet.has(j));
//
// console.log(typeof weakMap);

// let {height, width, title} = { title: "Menu", height: 200, width: 100 };
// console.log(height);
//
// let user = { name: "John", years: 30 };
// let {name, years: age, isAdmin = false} = user;
// console.log(name);
// console.log(age);

// console.log(this);
//
// let sayCat = () => console.log("Myak");
//
// module.exports.cat = sayCat();
//
// console.log(this);
// console.log(__filename);

// console.log(a);
//
// let a = 1;
// let b = 2;
// console.log(d);
//
// function mult(a,b) {
//     console.log(c);
//     var c = a*b;
//     return c;
// }
//
// var d = mult(2,3);
// console.log(d);

// var result = [];
//
// for (var i = 0; i < 5; i++) {
//     console.log(i);
//     result[i] = ((x) => { return () => console.log(x) })(i);
// }
//
// console.log("haha");
//
// result[0](); // 0, expected 0
// result[1](); // 1, expected 1
// result[2](); // 2, expected 2
// result[3](); // 3, expected 3
// result[4](); // 4, expected 4

// function createCounter() {
//     var counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('Пример инкремента:', c1, c2, c3);

// let foo = (...rest) => console.log(rest[0]);
//
// foo(1,2,3,4);

// function makeCounter() {
//     let count = 0;
//     return function() {
//         return count++;
//     };
// }
//
// let counter1 = makeCounter();
// let counter2 = makeCounter();
//
// alert( counter1() ); // 0
// alert( counter1() ); // 1
//
// alert( counter2() ); // 0 (независимо)

// function Rabbit(name) {
//     this.name = name;
//     console.log(name);
// }
//
// let rabbit = new Rabbit("White Rabbit");
// console.log(rabbit.constructor);
//
// let Myak = class Cat {
//     constructor(name) {
//         this.m = "myak";
//         this.name = name;
//     }
//
//     get age() {
//         return this._age;
//     }
//
//     set age(value) {
//         if (typeof value == "number") {
//             this._age = value;
//         } else {
//             console.log("Invalid Data");
//             return;
//         }
//     }
//
//     myak() {
//         return this.m;
//     }
// };
//
// let ko = new Myak("ko");
// ko.age = 5;
// console.log(new Myak("as").myak());

// let cat = {
//     eats: true,
//     myak: true
// };
//
// let dog = {
//     myak: false
// };
//
// function Bars(age) {
//     this.age = age;
// }
//
// Bars.prototype = cat;
// let bars = new Bars(2);
// console.log(bars.eats);
//
// let reks = Object.create(dog);
// console.log(reks.myak);
//
// Object.setPrototypeOf(reks, cat);
// console.log(reks.myak);


// try {
//
//     console.log('Начало блока try');  // (1) <--
//
//     lalala; // ошибка, переменная не определена!
//
//     console.log('Конец блока try (никогда не выполнится)');  // (2)
//
// } catch(err) {
//
//     console.log(`Возникла ошибка!`); // (3) <--
//
// }

// setInterval(() => console.log("ha"), 1000);
//
// for (let i = 0; i < 7; ++i){
//     console.log(i);
//     console.log(100*i);
// }
//
// console.log("m");

let u = { a : {}};
console.log(u.a);