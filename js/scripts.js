$(document).ready(function () {
  $(".clickable").click(function () {
    $(this).parent().find(".flashcard-closed").toggle();
    $(this).parent().find(".flashcard-open").toggle();
  });
});
