'use strict'

function generateDiv(item) {
  // let customClass = '';
  // if (typeof fizzbuzzResult === 'string'){
  //   customClass = fizzbuzzedResult;
  // }
  return `<li>
  <span class="shopping-item">${item}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`
}

function main() {
  //target the <form> element
  //tell JS to watch out for a submit event

  //this deletes the closest <li>
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    //console.log(event)
    $(this)
      .closest('li')
      .remove()
  })

  //this strikesthrough closest <li>
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    //console.log(event)
    $(this)
      .closest('li')
      .find('.shopping-item')
      //toggleClass on .shopping-item
      .toggleClass('shopping-item__checked')
  })


  $('#js-shopping-list-form').submit(event => {
    // console.log(event)

    event.preventDefault()

    //listItem replaces the word you just typed in the input textbox ".js-shopping-list-entry" as an empty string once the submit button is triggered

    let listItem = $('.js-shopping-list-entry').val()

    console.log(listItem)

    // const results = []

    //figure out how to get the li added

    // on submit you want to .append the resulting li
    $('.shopping-list').append(generateDiv(listItem))
  })
}

$(main)
