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
//Add pagination links to end of the page.
var pagination = $('.page').append('<div class="pagination"><ul></ul></div>');
//Add search bar to the end of the page header.
var search = $('.page-header').append('<div class="student-search"><input id="searchBar" type="text" placeholder="Enter search here."><button id="searchButton">Search</button></div>');
//Empty array for later use.
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
//Function to determine what entries to show.
function entriesToShow (primary, currentArray, start, end) {
  currentArray = primary.slice(start, end);
  $(primary).hide(600);
  $(currentArray).show(600);
}

function navClick(active) {
  $('.pagination').find('a').removeClass('active');
  $(active).addClass('active');
}
//Pagination links function
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
//Search function
var searchFunc = function() {
  var searchInput = $('input').val().toLowerCase().trim();
  $(studentArray).hide();
  searchArray = [];
  $('.student-item').each(function() {
    var results = $(this).find('.student-details').text().toLowerCase();
	if (results.indexOf(searchInput) !== -1) {
		var moved = $(this)[0];
		searchArray.push(moved);
		$(searchArray).hide().slice(0, 10).show();
	}});
//Add message if no results were founc.
	if (searchArray.length === 0) {
	var message = '<li>No matches were found for your search.</li>';
	  $('.student-list').append(message);
	}
  //show and hide pagination buttons depending on if there are more than 10 results.
  if (searchArray.length <= 10) {
	  $('.pagination ul').hide();
  	} else {
	  		$('.pagination ul').show();
	  }
}

//Show the first 10 entries in Student Array on initial page load.
$(studentArray).hide().slice(0, 10).show();

//Add search field and button
$('.page-header').append(search);

//Add empty div to add page buttons to.
$('.page').append(pagination);
pages();
pagClick(studentArray, secondaryArray);
//On keyup in the search bar the search function is ran.
$('#searchBar').keyup(searchFunc);
//Added event listener to the search button.
$('#searchButton').click(searchFunc);
