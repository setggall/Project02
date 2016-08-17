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
var pagination = $('.page').append('<div class="pagination"><ul></ul></div>');
var secondaryArray = [];
//Get number of pages needed and append them into the empty div added to the page.
function pages(array) {
  var numberToShow = 10;
  var numberOfPages = Math.ceil(studentArray.length / numberToShow);
  for (var i = 0; i < numberOfPages; i++) {
    $('.pagination ul').append('<li><a href="#">' + (i+1) + '</a></li>');
  }
  $('.pagination').find('a').first().addClass('active');
}

function entriesToShow (primary, currentArray, start, end) {
  currentArray = primary.slice(start, end);
  $(primary).hide();
  $(currentArray).show();
}

function navClick(active) {
  $('.pagination').find('a').removeClass('active');
  $(active).addClass('active');
}

function pagClick(array, newArray) {
  pagination.on('click', 'a', function(prev) {
    prev.preventDefault();
    var clicked = prev.target;
    var filter = $(clicked).html();
    var numberToShow = 10;
    var beginSlice = (filter * numberToShow) - numberToShow;
    var endSlice = beginSlice + numberToShow;
    navClick(clicked);
    entriesToShow(array, newArray, beginSlice, endSlice);
  });
}
//Show the first 10 entries in Student Array on initial page load.
$(studentArray).hide().slice(0, 10).show();

//Add search field and button
$('.page-header').append('<div class="student-search"><input placeholder="Enter search here."><button>Search</button></div>');
//Add empty div to add page buttons to.
$('.page').append(pagination);
pages();
pagClick(studentArray, secondaryArray)
