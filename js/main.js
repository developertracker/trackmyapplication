function manageHeight(){
	var winHeight = $(window).height();
	var headerHeight = $(".header").height();
	var totalHeight = winHeight-headerHeight;
	$(".content").css("height",totalHeight);

	var bannerHeight = $('.banner').height();
	var stepsInfoTop = headerHeight + bannerHeight;
	$('.steps-info').css('top', stepsInfoTop + 20);
}
function validateForm() {
	var x = document.forms["searchApplication"]["appNumber"].value;
	var z = document.forms["searchApplication"]["mobileNumber"].value;
	if (x == "" && z=="") {
	  alert("Please Enter Application Number OR Mobile Number");
	  return false;
	}
	// if(z.length > 1 && z.length < 6 ){
	// 	alert("Please Enter Valid Mobile Number");
	// 	return false;
	// }
  }
$(document).ready(function(){
	manageHeight();
	$('.otpEntry .input-control').each(function(){
		$(this).keyup(function(){
			if($(this).val()!="") {
				$(this).next().focus();
			}
		})
	});
	$('#appNumber').keypress(function (e) {
		var regex = new RegExp("^[a-zA-Z0-9]+$");
		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		if (regex.test(str)) {
			return true;
		}

		e.preventDefault();
		return false;
	});
});
$(window).resize(function(){
	manageHeight();
});