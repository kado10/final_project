

$(document).ready(function(){
//when page loads areas of brain light up in sequence along with corresponding title
//brain return to washed out version of itself
//when mouse hovers over brain area becomes brighter
//when area of brain clicked 
$(".frontal-lobe").on("click", function()	{
	$("p,h2,h3").hide();
	$(".grey-box, .frontal-text h2, .frontal-text .overview").show();
});
$(".parietal-lobe").on("click", function()	{
	$("p,h2,h3").hide();
	$(".grey-box, .parietal-text h2, .parietal-text .overview").show();
});
$(".occipital-lobe").on("click", function()	{
	$("p,h2,h3").hide();
	$(".grey-box, .occipital-text h2, .occipital-text .overview").show();
});
$(".temporal-lobe").on("click", function()	{
	$("p,h2,h3").hide();
	$(".grey-box, .temporal-text h2, .temporal-text .overview").show();
});
$(".brainstem").on("click", function()	{
	$("p,h2,h3").hide();
	$(".grey-box, .brainstem-text h2, .brainstem-text .overview").show();
});
$(".cerebellum").on("click", function()	{
	$("p,h2,h3").hide();
	$(".grey-box, .cerebellum-text h2, .cerebellum-text .overview").show();
});

	//area of brain becomes larger and brighter
	//corresponding information box pops up
//when mouse hovers over .blue-box background-color change darker
$(".blue-box").hover(function(){
    $(this).css("background-color", "aqua");
    }, function(){
    $(this).css("background-color", "rgb(68, 114, 196)");
});
	//when tab selected corresponding information appears in box
	//when x is clicked the popup box is closed
});