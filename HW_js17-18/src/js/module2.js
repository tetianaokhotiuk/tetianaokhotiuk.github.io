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