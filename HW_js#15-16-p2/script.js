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

  addAnsBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addNewLab(form, createAskLabel(++number));
  });

  pushBtn.addEventListener('click', function (e) {
    e.preventDefault();
    newArr.push(getData(form));
    try {
      localStorage.setItem('new',JSON.stringify(newArr));
    } catch (e) {
      console.log(' error, we can`t push item in local storage(( ', e);
    }
    try {
      var final = localStorage.getItem('new');
    } catch (e) {
      console.log(' error, we can`t pull item in local storage(( ', e);
    }
    var fin = JSON.parse(final);
    console.log(fin[0].question);
  });

  function getData(put) {
    testRadio.question = put.querySelector('#q1').value;
    testRadio.answers = getArrValue(put);
   testRadio.correctAnswers = getArrValue(put);;
    return testRadio ;
  };

  function getArrValue(put) {
    var inp = put.querySelectorAll('.ask');
    var a = [];
    inp.forEach(function (item) {
      a.push(item.value);
    });
    return a;
  }
})();