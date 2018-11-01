function main() {
  $('.thumbnail').on('click', function(event) {
    const img = $(this)
      .find('img')
      .attr('src')
    const imgAlt = $(this)
      .find('img')
      .attr('alt')

    $('.hero img')
      .attr('src', img)
      .attr('alt', imgAlt)
  })
}

$(main)
