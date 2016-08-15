//Show only 10 students at a time.
//Add search function
  //allow search by name or email address
  //partial matches should also be displayed.
  //search results should also be paginated if there are more than 10 results.

//Add simple animations when transitioning pages.
//Dynamically filter listings as search is typed.
//If no matches are found include message that tells user there are no matches

//Send list item to an array.
var studentArray = $('.student-item').toArray();
//Number of entries to show per page.
var numberToShow = 10;
//function to show 1st 10 list items and hide the rest.
var pageLoad = function() {
  $(studentArray).hide();
  $('.student-item:nth-child(-n+10)').show();
};

pageLoad();
//Add search field and button
$('.page-header').append('<div class="student-search"><input placeholder="Enter search here."><button>Search</button></div>');
//Add empty div to add page buttons to.
$('.student-list').after('<div class="pagination"><ul></ul></div>');

//create page buttons and get the correct number of pages.
var pageButtons = function() {
  $('.pagination ul li').remove();
  var pageNumber = Math.ceil(studentArray.length / numberToShow);
  for (var i = 0; i < pageNumber; i++) {
    $('.pagination ul').append('<li><a href="#">' + (i+1) + '</a></li>');
  }
  $('.pagination ul li a').eq(0).addClass('active');
};
//call function to add the page buttons.
pageButtons();
