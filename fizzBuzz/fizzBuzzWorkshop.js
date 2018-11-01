'use strict';


//we can use the fizzBuzz function for seperation of concerns

function fizzbuzz(num) {
  if(num % 15 === 0) return 'fizzbuzz';
  if(num % 3 === 0) return 'fizz';
  if(num % 5 === 0) return 'buzz';
}

function generateDiv(fizzBuzzedResults){
  let customClass = '';
  if (typeof fizzbuzzResult === 'string'){
    customClass = fizzbuzzedResult;
  }
  return `<div class="fizz-buzz-item ${customClass}">
        <span>${fizzbuzzedResult}</span>
    </div> `;
}

// console.log(generateDiv('fizz'));
// console.log(generateDiv(11));
// console.log(generateDiv('fizzbuzz'));


function main() {
  $('#number-chooser').on('submit', event => {
    //console.log('this works'));

    event.preventDefault();

    //grab the input element; access the input and label class

    //recieve input count number from user
    const countTo = $('#number-choice').val();
    //console.log(countTo);

    // clear the form
    event.target.reset();


    //count from 1 to input number and applying fizzbuzz
  
    const fizzBuzzedResults = [];
    for (let i = 1; i <= countTo; i++) {
      fizzbuzzedResults.push(fizzbuzz(i));
    }
    // console.log(fizzBuzzedResults);

    const divElements = fizzbuzzedResults.map(result => generateDiv(result));

    //$('.js-results').append(divElements);

    $('.js-results').html(divElements);
  });
}


$(main);