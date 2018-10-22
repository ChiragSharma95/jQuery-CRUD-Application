// Strike through functionality

$("li").click(function() {
  $(this).toggleClass("done");
});

// Deleting functionality

$("span").click(function(event) {
  $(this)
    .parent()
    .fadeOut(200, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

// Adding functionality
