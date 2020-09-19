$(function(){
    $("#question-list dt").on("click", function() {
    $(this).next().slideToggle();
    });
    $("#question-list dt").click(function(){
        if($("#question-list").hasClass('under')){
            $(this).children().removeClass('under')
        };
    });
});