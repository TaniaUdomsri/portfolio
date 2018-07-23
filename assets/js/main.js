$(function() {
  
  // Top nav menu
  $(".top-menu-item").click(function() {
  	var menu = $(this).attr('menu');
  	$.scrollTo('#' + menu, 500, {offset: {top:0, left:0} });
  })

  // Portfolio cards
  $(".portfolio-card").click(function() {
  	var port = $(this).attr('portfolio');
  	window.location = '/' + port + '.html';
  });
});