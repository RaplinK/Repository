function g(text_, count) {
  document.getElementById("l"+count).innerHTML=text_;
}


$(".TextClick").click(function() {
  $(this).next(".ToggledDiv").slideToggle("slow");
});