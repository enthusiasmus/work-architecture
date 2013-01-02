$(document).ready(function() {
  $('#feed').masonry({
    itemSelector: '#feed li',
    columnWidth: 512
  });

  var lastFeedPositionBottom = 0;
  var lastElement = 0;

  $('#feed > li').each(function() {
    if ($(this).position().left == 0) {
      $(this).css({
        "paddingRight": "20px",
        "borderRight": "1px solid rgba(200, 200, 200, 1)"
      })
    } else if ($(this).position().left == 512) {
      $(this).css({
        "paddingLeft": "20px",
        "borderLeft": "1px solid rgba(200, 200, 200, 1)",
        "marginLeft": "-1px"
      })
    }
    
    if (($(this).position().top + $(this).height()) >= lastFeedPositionBottom) {
      lastFeedPositionBottom = $(this).position().top + $(this).height();
      lastElement = this;
    }
  });

  $(lastElement).css({"borderBottom": "none"});
}); 