/* eslint-disable no-undef */
$(document).ready(function () {
	var aboutShort =
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
	var aboutLong =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

	$(".about p").text(aboutShort);

	$("#more-button").on("click", function () {
		let shortText = $(".about p").text();
		let longText;
		let newButtonText;
		if (shortText === aboutShort) {
			longText = aboutLong;
			newButtonText = "Manje";
		} else {
			longText = aboutShort;
			newButtonText = "Više";
		}
		$(".about p").text(longText);
		$("#more-button").text(newButtonText);
	});
});
// animate images on scroll
function isInViewport(element) {
	let rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

function handleScroll() {
	let elements = document.querySelectorAll(".card");

	elements.forEach(function (element) {
		if (isInViewport(element)) {
			element.classList.add("active");
		}
	});
}

document.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);

// safari scroll restoration

if ("scrollRestoration" in history) {
	history.scrollRestoration = "manual";
}
