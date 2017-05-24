



// #typography #logos
$('.update-view').on('click', function(e) {
  e.preventDefault();
  var subSectionToShow = $(this).text();
  // subSectionToShow = subSectionToShow.toLowerCase();
  $('#Introduction').hide();
  $('.sub-article').hide();
  console.log('#' + subSectionToShow);
  $('#' + subSectionToShow).fadeIn(350);

});


$('#overview, #visual-styles').on('click', function(e) {
  e.preventDefault();
  // Fade toggle the unordered list
  $(this).next('.sub-menu').fadeToggle(.1);
});


// When the user clicks visual styles
// $('#visual-styles').on('click', function(e) {
//   e.preventDefault();
//   // Fade toggle the unordered list
//   $('.sub-menu').fadeToggle(.1);
// });
