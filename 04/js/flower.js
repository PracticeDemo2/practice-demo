/**
 * Created by ran on 2016/5/15.
 */

$(window).load(function(){
    $(".pic-container>.container").on("click mouseenter",function(){
//                    alert("a");
        $(this).children("div").slideDown(800);


    })
    $(".pic-container>.container").on("mouseleave",function(){
        $(this).children("div").slideUp(800);
    })
});