
// Question 1
// function test(a) {
//     console.log(a)
// }

// test(1)

// Question 2
// function out2(a, b, c, d) {
//     console.log(a, b, c, d)
// }

// out2(1, 2, 3, 4)

// Question 3

// function out3(a, b) {
//     console.log(a, b)
// }

// out3(4 == "4")

// P7

// const aa = 4 + "12";


// out(typeof (bb))

// const bb = 4 + true;

// function out(bb) {
//     console.log(bb)
// }

// out(typeof (bb));


// function test() {

//      hej;

//     hej = 10;

//     console.log(hej)

// }

// hej = 20;

// console.log(hej)

// test()

// function sum(x, y) {
//     console.log(x + y);
// }

// sum(1, 10);

// const fruits = ["apple", "orange", "cherry", "strawberry"]

// let dropdown2 = document.getElementById('demo');

// function myFunc() {

//     fruits.forEach(function (fruit) {

//         for (let i = 0; i < fruits.length; i++) {
//             dropdown2.innerHTML = fruits;

//         }
//         console.log(fruit)
//     })

// }

// myFunc()

// P14

// const input = document.querySelector('input');
// const log = document.getElementsByClassName("getColor");

// input.addEventListener('input', updateValue);

// function updateValue(e) {

// document.getElementById("button").addEventListener("click", function () {
//     document.body.style.background = log.textContent = e.target.value;
// });

// }

// function myFunction() {
//     updateValue()
// }

// myFunction()

// P15
// let button = document.getElementById("button").addEventListener("click", function () {
//     document.getElementById("h1").style.color = "red";
// });

// P16
// let button = document.getElementById("button").addEventListener("click", function () {
//     document.getElementById("red").style.color = "red";
// });

// document.onkeydown = function (evt) {
//     evt = evt || window.event;
//     if (evt.key == "Escape") {
//         document.getElementById("blue").style.color = "blue";
//     }
// };

// P18

// const fruits = ["apple", "orange", "cherry", "strawberry", 1]

// function myFunc() {

//     fruits.map((test) => console.log(test))

// }

// myFunc()

// P19

// const fruits = ["apple", "orange", "cherry", "strawberry"]

// let dropdown = document.getElementById('ddFruit');
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose fruit';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// for (let i = 0; i < fruits.length; i++) {
//     option = document.createElement('option');
//     option.text = fruits[i];
//     option.value = fruits[i];
//     dropdown.add(option);
// }


// P20

// const fruits = ["apple", "orange", "cherry", "strawberry"]

// let dropdown = document.getElementById('ddFruit');
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose fruit';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// for (let i = 0; i < fruits.length; i++) {
//     option = document.createElement('option');
//     option.text = fruits[i];
//     option.value = fruits[i];
//     dropdown.add(option)

//     dropdown.addEventListener("click", function (e) {

//         console.log(e.target.value)
//     });
// }

// P21

// const fruits = ["apple", "orange", "cherry", "strawberry"]

// let dropdown = document.getElementById('ddFruit');
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose fruit';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// for (let i = 0; i < fruits.length; i++) {
//     option = document.createElement('option');
//     option.text = fruits[i];
//     option.value = fruits[i];
//     dropdown.add(option)

//     dropdown.addEventListener("click", function (e) {

//         console.log(e.target.value)
//     });
// }

// document.getElementById("clear").addEventListener("click", function () {
//     console.clear()
// })
