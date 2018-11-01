'use strict';

function main(){
  $('#number-chooser').submit(event => {
    event.preventDefault();
    
    $('.js-results').empty();
    const num = parseInt($(this).find('input[name="number-choice"]').val());
    
    const results = [];

    for (let i = 1; i <= num; i ++) {
      
      // if it's divisible by 3 and 5, create a fizzbuzz element
      if (i % 15 === 0) {
        results.push($(
          '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));  
      }
      // if it's divisible by only 5, create a buzz element
      else if (i % 5 === 0) {
        results.push($(
          '<div class="fizz-buzz-item buzz"><span>buzz</span></div>')); 
      }
      // if it's divisible by only 3, create a fizz element
      else if (i % 3 === 0) {
        results.push($(
          '<div class="fizz-buzz-item fizz"><span>fizz</span></div>')); 
      }
      // otherwise, create a fizz-buzz-item element that just displays `num`
      else {
        results.push($(
          `<div class="fizz-buzz-item"><span>${i}</span></div>`)); 
      }
    }
    // attach our results to the ".js-results" element in the DOM
    $('.js-results').append(results);
  });

}

$(main);