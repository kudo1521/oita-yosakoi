$(function(){
    $("#question-list dt").on("click", function() {
    $(this).next().slideToggle();
    });
    $("#question-list dt").click(function(){
        if($(span).hasClass('under')){
            $(this).children(span).removeClass('under')
        };
    });
});