// Part 1 Do stuff here - use the selector $("#part1") and the .toggle() method


$("#btn1").click(function() {
	$("#part1").toggle(500);


});

// Part 2 $(selector).css(property, value);
$("#btn2").click(function() {
	$("#part2").css("background-color", "blue");

});

// Part 3
$("#btn3a").click(function(){
	$("#part3").addClass("shadow");

});
$("#btn3b").click(function(){
	$("#part3").removeClass("shadow");
});

// Part 4
$("#btn4").click(function(){
	$("#quote").html("<p>When unhappy, one doubts everything; when happy, one doubts nothing.</p>");
});

// Part 5
    $("#btn5").click(function(){
        alert("This is a message!" + $("#btn5").val());
    });

