/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/jsbasics/store.js
var store_text = '';

function getText() {
  return store_text;
}

function setText(newText) {
  store_text = newText;
}


;// CONCATENATED MODULE: ./src/jsbasics.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



console.error('=====================');
var test1 = [1, 2, 3];
var test2 = 'ADC';
test1.push(4);
test2 = 'Yo';
console.log(test1, test2);
var number = 2;
var string = 'String';
var array = [1, 2, 3];
var object = {
  key1: 1,
  hse: 2,
  design: 3
};
var _boolean = true;
console.log(_typeof(number), _typeof(string), _typeof(array), _typeof(object), _typeof(_boolean));
console.log(number, string, array, array.length, object, _boolean);
console.log(array[1], object.hse, object['hse']);
console.log(Object.keys(object), Object.values(object));
var complexArray = [[1, 2, 3], {
  firstname: 'Yo',
  lastname: 'Rap',
  albums: ['2019', '2020', '2021']
}];
var complexObject = {
  firstname: 'Yo',
  lastname: 'Rap',
  albums: [{
    title: 'Superalbum',
    year: 2020,
    label: 'Blablabla'
  }, {
    title: 'Superalbum 2',
    year: 2021,
    label: 'Blablabla'
  }]
};

function functionName(a) {
  console.log(a);
}

var arrowFunction = function arrowFunction(a) {
  console.log(a);
};

functionName('Yo');
arrowFunction('Yo');
console.log('getText', getText());
setText('Yo');
console.log('getText', getText());
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
});
/******/ })()
;