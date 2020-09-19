$(function(){
    $("#question-list dt").on("click", function() {
    $(this).next().slideToggle();
    });
    if($('#question-list dt').hasclass('.under')){
        $('#question-list dt').removeclass('.under');
    };
});