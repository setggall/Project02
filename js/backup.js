$(document).ready (function(){
  var showPerPage = 10;
  var numberOfItems = $(.student-list).children().size();
  var numberOfPages = Math.ceil(numberOfItems/showPerPage);

  $('#currentPage').val(0);
  $('#showPerPage').val(showPerPage);

  var navHTML = '<a class="previous_link" href="javascript:previous();">Prev</a>';
  var current_link = 0;
  while(numberOfPages > current_link) {
    navHTML += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
    current_link++;
  }
  navHTML += '<a class="next_link" href="javascript:next();">Next</a>';

  $('#pageNav').html(navHTML);

  $('#pageNav .page_link:first').addClass('active_page');

  $('.student-list').children().css('display', 'none');

  $('.student-list').children().slice(0, showPerPage).css('display', 'block');
});
