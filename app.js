import regeneratorRuntime from "regenerator-runtime";

$(function() {
  
  // Top nav menu
  $('body').on('click', '.top-menu-item', function() {
    let menu = $(this).attr('menu');
    $.scrollTo('#' + menu, 500, {offset: {top:0, left:0} });
  })

  // Portfolio cards
  $('body').on('click', '.portfolio-card', function() {
    let port = $(this).attr('portfolio');
    window.location = '/' + port + '.html';
  });

  var loadHtmlContent = (fetchUrl, contentId) => {
    $.ajax({
      url: fetchUrl,
      success: function(data){
        document.getElementById(contentId).innerHTML = data;
      }
    });
  };

  loadHtmlContent('./components/footer.html', 'footer');
});
