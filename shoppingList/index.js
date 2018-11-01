'use strict';

function main(){

  //target the <form> element
  //tell JS to watch out for a submit event
  $('#js-shopping-list-form').submit(event => {
    //console.log('this works!');
    
    event.preventDefault();

    //listItem replaces the word you just typed in the input textbox ".js-shopping-list-entry" as an empty string once the submit button is triggered
    let listItem = $(".js-shopping-list-entry").val();
    $('.js-shopping-list-entry').val('');


    const results = [];

    //figure out how to get the li added

    // on submit you want to .append the resulting li   
    $('shopping-list').append(results);

  });
}

$(main);