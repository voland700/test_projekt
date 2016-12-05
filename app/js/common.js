$(document).ready(function() {
	var $ansver_blok = $('.ansver_blok');	
	$ansver_blok.hide().prev().click(function(){
		$ansver_blok.not(this).slideUp();
		$(this).next().not(':visible').slideDown();
	});//окончание Click

	$ansver_blok.on('click', '.ansver-item', function(){
	var quest = $(this).data('ansver');		
	if(quest===1){
		$(this).css({'background': 'rgba(68, 252, 94, 0.3)'});
		$(this).parent().parent().children('.question-item').removeClass('question-item--false').addClass('question-item--true' );			
	} else {
		$(this).css({'background': 'rgba(251, 64, 37, 0.3)'});	
	}
	});
});



