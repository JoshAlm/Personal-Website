$(document).ready(function() {
	
		function changeNavColor(backImg, backColor) {
			$('.navbar')[0].style.backgroundImage = backImg;
			$('.navbar')[0].style.backgroundColor = backColor;
		}
	
		var theAnchors = $('.anchor');
		var skillsTop = $('#skills').position().top;
		var projectsTop = $('#projects').position().top;
		var contactTop = $('#contact').position().top;
	
   $(window).scroll(function () {
			
      if ($(this).scrollTop() < skillsTop) {
				changeNavColor('linear-gradient(to right, rgba(22, 91, 156, 1), rgba(130, 185, 237, 1))', 'none');
      } else if ($(this).scrollTop() < projectsTop){
				changeNavColor('none', 'rgba(130, 185, 237, 1)');
			} else if ($(this).scrollTop() < contactTop){
				changeNavColor('none', '#EAC180')
			} else {
				changeNavColor('none', '#EAC180')
			}
   });
	 
	 $(window).resize(function() {
		skillsTop = $('#skills').position().top;
		projectsTop = $('#projects').position().top;
		contactTop = $('#contact').position().top;
	 })
	 
	 $('.about-link').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	 });
	 
	 $('.skills-link').click(function() {
		$('html, body').animate({
			scrollTop: skillsTop + 1
		}, 500);
		return false;
	 });
	 
	 $('.projects-link').click(function() {
		$('html, body').animate({
			scrollTop: projectsTop + 1
		}, 500);
		return false;
	 });
	 
	 $('.contact-link').click(function() {
		$('html, body').animate({
			scrollTop: contactTop
		}, 500);
		return false;
	 });
	 
	 
	 
});