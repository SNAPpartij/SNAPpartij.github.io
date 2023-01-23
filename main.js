function goTo (link) {
	link = link.toString();
	window.location.href = link;
}

$(document).ready(function () {
    $('.headerbutton').hover(function() {
		$('.headerbutton').addClass('blurred');
		$(this).removeClass('blurred');
	}, function() {
		if ($('.headerbutton').hasClass('blurred')) {
			$('.headerbutton').removeClass('blurred');
		};
	});
});