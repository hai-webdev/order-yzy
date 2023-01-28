// 页尾的js代码
import "./index.less";

$(".return-up").on("click", function(){
    $("html,body").animate({
        scrollTop: 0
    }, 1000)
})

$(window).scroll(function(){
    const scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if(scrollTop >= 400){
        $(".return-up").fadeIn();
    }else{
        $(".return-up").fadeOut();
    }
})