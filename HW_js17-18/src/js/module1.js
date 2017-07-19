(function () {
  'use strict';

  var test = {
    question: '',
    answers: [],
    correctAnswers: []
  };

  var testRadio = {};
  var testCheckbox = {};
  testRadio.__proto__ = test;
  testCheckbox.__proto__ = test;

  var addAnsBtn = document.querySelector('#addAns');
  var pushBtn = document.querySelector('#push');
  var form = document.querySelector('.form');
  var number = 1;

  var newArr = [];

    function createAskLabel(num) {
    var str = '<label><div class="sort">Answer ' + num + '</div><input class="input ask" type="text" id="c' + num + '"></label>';
    var e = document.createElement('li');
    e.innerHTML = str;
    return e;
  }

  function addNewLab(elem, str) {
    elem.querySelector('ul').append(str);
  }