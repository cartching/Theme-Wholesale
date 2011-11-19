/**
 *
 * Cartching Template / Wholesale v1.0
 * http://cartching.com | Copyright (c) Cartching, 2011
 * 
 * Copyright (C) 2011 Cartching
 * 
 */


// Change Stock Value to Text Description
// $(".stockqty").stockify();

// $('.stockqty').stockify().parent().show();


(function($){
   $.fn.stockify = function() {

       return this.each(function() {
           var $this = $(this);
           var level = parseInt($this.text(),10);
           
           var text;

/*

			// DETAILED VERSION
           if (level == 0) text = "None";
           if (level > 6 || level < 19 ) text = "5+";
           if (level > 20 || level < 40 ) text = "20+";
	//           if (level < 30) text = "30+";
           if (level > 41) text = "40+";
           if (level == 50) text = "50+";
           if (level > 50) text = "50+";
		   if (level > 100) text = "100+";
           if (level == 1 ) text = "Only 1 left ";
           if (level == 2 ) text = "Only 2 left ";
           if (level == 3 ) text = "Only 3 left ";
           if (level == 4 ) text = "Only 4 left ";
           if (level == 5 ) text = "Only 5 left ";


			// IDEAL VERSION
           if (level < 25) text = "Low";
		   if (level >= 25) text = "20+"
           if (level > 40) text = ""; //  if (level > 25) text = "Many";
           if (level == 1 ) text = "Only 1 left ";
           if (level == 2 ) text = "2 left ";
           if (level == 3 ) text = "3 left ";
           if (level == 4 ) text = "4 left ";
           if (level == 5 ) text = "5 left ";
           if (level == 0) text = "None";

*/

		   if (level >= 6) text = ""
           if (level == 1 ) text = "Only 1 left ";
           if (level == 2 ) text = "2 left ";
           if (level == 3 ) text = "3 left ";
           if (level == 4 ) text = "4 left ";
           if (level == 5 ) text = "5 left ";
           if (level == 0) text = "None";

           $this.text(text);

       });
   };
})(jQuery);



// Page Navigation Selector
$(document).ready( function() {

	// set any current links in the #nav to be "active"
	$("#nav a").each(function(){
		var href = this.getAttribute('href',2);

		var location = new String( document.location );
		location = location.substr(location.length-href.length, href.length )

		if ( location == href) {
			$(this).addClass("active");
		}
	});


	// set any current links in the #nav to be "active"
	$("#aside li a").each(function(){
		var href = this.getAttribute('href',1);

		var location = new String( document.location );
		location = location.substr(location.length-href.length, href.length )

		if ( location == href) {
			$(this).addClass("active");
		}
	});


});



// Open External Links as Blank Targets via Unobtrusive JavaScript
// http://perishablepress.com/press/2007/11/20/open-external-links-as-blank-targets-via-unobtrusive-javascript/

function externalLinks() {
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++) {
		var anchor = anchors[i];
		if (
			anchor.getAttribute("href") && ( 
			anchor.getAttribute("rel") == "external" || 
			anchor.getAttribute("rel") == "external nofollow" || 
			anchor.getAttribute("rel") == "nofollow external" )
			)
		anchor.target = "_blank";
	}
}
window.onload = function() {
	externalLinks();
}



// Jquery Form Validation
// http://bassistance.de/jquery-plugins/jquery-plugin-validation/

// TESTING - Stops submitting the form.
//	$.validator.setDefaults({
//		submitHandler: function() { alert("submitted!"); }
//	});

$().ready(function() {


	// Subscribe
	$("#form-subscribe").validate({
	rules: {

		email: {
			required: true,
			email: true
			}
		},

		messages: {
			email: "Please enter a valid email address"
		}

	});


	// Contact
	$("#form-contact").validate({
	rules: {

		email: {
			required: true,
			email: true
			}
		},

		messages: {
			email: "Please enter a valid email address"
		}

	});


	// Checkout
	$("#form-checkout").validate({
	rules: {

		email: {
			required: true,
			email: true
			}
		},

		messages: {
			email: "Please enter a valid email address"
		}

	});


	// Account Sign In    
	$("#accountlogin").validate();
	// Forgot Password
	$("#accountsendpassword").validate({
	rules: {

		email: {
			required: true,
			email: true
			}
		},

		messages: {
			email: "Please enter a valid email address"
		}

	});
	$("#accountform").validate();


});