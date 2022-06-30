function designForm() {
	$("#my-modal form").addClass("my-form");
}

$(document).ready(function() {
	Typed.new("#writing-text", {
		strings: [
			"am a Junior Web Developer.", "love everything about code.", "am a keen learner.", "solve problems."
		],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 1,
		contentType: 'text',
		callback: function() {
			$("#writing-text").css({"color": "#fff", "background-color": "rgb(46, 223, 123)"});
		},
		preStringTyped: function() {},
		onStringTyped: function() {}
	});

})
