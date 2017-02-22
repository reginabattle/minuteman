
/* Video
-----------------------------------------------------------------*/

// Stop video when modal is closed

$(document).on('closed', '.remodal', function (e) {
	$(".video-wrapper iframe").attr("src", $(".video-wrapper iframe").attr("src"));
});



/* Replace Text with icons
-----------------------------------------------------------------*/

// Main Menu Icons

$(".nav-cart a").replaceWith("<a href='#'><i class='material-icons'>shopping_cart</i></a>");
$(".nav-search a").replaceWith("<a href='#'><i class='material-icons'>search</i></a>");


// Footer Social Media Icons

$('.bottom-menu li a').each(function() {
  var icon = $(this).html();
 
  // Facebook
  if( $(this).text() == "Facebook" ) {
    $(this).html(icon.replace('Facebook', '<i class="fa fa-facebook" aria-hidden="true"></i>'));
  } 

  // Instagram
  else if ( $(this).text() == "Instagram" ) {
    $(this).html(icon.replace('Instagram', '<i class="fa fa-instagram" aria-hidden="true"></i>'));
  } 

  // Twitter
  else if ( $(this).text() == "Twitter" ) {
    $(this).html(icon.replace('Twitter', '<i class="fa fa-twitter" aria-hidden="true"></i>'));

  } 

  // Pinterest
  else if ( $(this).text() == "Pinterest" ) {
    $(this).html(icon.replace('Pinterest', '<i class="fa fa-pinterest-p" aria-hidden="true"></i>'));
  }
});



/* Equal Columns
-----------------------------------------------------------------*/

equalheight = function(t) {
  var n, e = 0,
  i = 0,
  o = new Array;
  $(t).each(function() {
    if (n = $(this), $(n).height("auto"), topPostion = n.position().top, i != topPostion) {
      for (currentDiv = 0; currentDiv < o.length; currentDiv++) o[currentDiv].height(e);
        o.length = 0, i = topPostion, e = n.height(), o.push(n)
      } else o.push(n), e = e < n.height() ? n.height() : e;
      for (currentDiv = 0; currentDiv < o.length; currentDiv++) o[currentDiv].height(e)
    })
}, $(window).load(function() {
    equalheight(".equal")
}), $(window).resize(function() {
    equalheight(".equal")
})
