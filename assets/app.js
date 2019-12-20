let position = $(window).scrollTop();
let boxed = position / 1000;



$(window).scroll(() => {
  const scroll = $(window).scrollTop();
  if (scroll) {
    console.log(`scrollDown${position}px`);
    $('span.currentScrollPosition').text(`${`${Math.round(position)}`}px`);
    $('div.expandingCircle').css('height', +position);
    $('div.expandingCircle').css('width', +position);
    $('button.fadeinBtn').css('opacity', `calc(${position}/1500)`);

  } else {
    console.log(`scrollUp${position}px`);
    $('span.currentScrollPosition').text(`${`${Math.round(position)}`}px`);
    $('div.expandingCircle').css('height', +position);
    $('div.expandingCircle').css('width', +position);
        $('div.expandingCircle').addClass("black");
    $('button.fadeinBtn').css('opacity', `calc(${position}/ 1500)`);
  }
  position = scroll;
});
console.log(boxed);