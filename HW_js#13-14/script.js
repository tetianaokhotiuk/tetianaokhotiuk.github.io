'use strict';

var test = {
    head: 'Test',
    questions: [
      {
       title: 'Question #1',
       answers: ['Variant1.1', 'Variant1.2',
        'Variant1.3'],
       correctAnswers: [1, 3]
     },
     {
       title: 'Question #2',
       answers: ['Variant2.1', 'Variant2.2', 
       'Variant2.3', 'Variant2.4'],
       correctAnswers: [1, 3, 4]
     },
     {
       title: 'Question #3',
       answers: ['Variant3.1', 
       'Variant3.2'],
       correctAnswers: [2]
     },

   ],
 };

localStorage.setItem('testStorage', JSON.stringify(test));

var myTest = JSON.parse(localStorage.getItem('testStorage'));

var trueResult = [true,false,true,true,false,true,true,false,true];

var parent = document.getElementById('wrapper');

var source = document.getElementById('test').textContent,
template = _.template(source);

parent.innerHTML += template(test);

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
 

document
  .getElementsByClassName("button")[0].addEventListener("click", function() {
    
    var mine = _.map(checkboxes,function(item) {
      return item.checked;
    });
    var u = _.isEqual(mine.sort(), trueResult.sort());
    
      if (u===true) {
        return testResult();
    } else {return badResult()}; 
   
  });

function getAnswers(arr) {
  return _.map(arr, function(item) {
    return item.checked;
  });
}

function testResult() {
    $('.test-result').remove();
    var $parent = $('.modal-body');
    var $modal = $('<p class="test-result"> Great!!! ' +  '</p>');
    $parent.append($modal); 
    $('input:checked').prop('checked', false);
    };

function badResult() {
    $('.test-result').remove();
  var $parent = $('.modal-body');
    var $modal = $('<p class="test-result"> Try once more please... ' +  '</p>');
    $parent.append($modal); 
    $('input:checked').prop('checked', false);
};

 
