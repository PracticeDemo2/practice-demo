/**
 * Created by Administrator on 2016/5/15.
 */
$(function(){
    $("#one-6").click(function(){
        $("#one-1").animate({
            "top":"400px",
            "left":"1000px"
        },1000)
        $("#one-7").show(1000);
        $("#one-5").animate({
            "top":"400px",
            "left":"200px"
        },2000)
        $("#one-3").slideUp(1500);
        $("#one-11").show(1500);
        $("#one-8").show(1000);
        $("#one-2").hide(1000);
        $("#one-8").animate({
            "top":"30px",
             "left":"1000px",
        },1000)
        $("#one-6").hide(1000);
        $("#one-12").fadeTo(1000,1);
        $("#one-12").animate({
            "top":"300px",
            "left":"500px"
        },1000)
        $("#one-9").fadeTo(1000,0.5)
        $("#one-10").fadeTo(1000,0.5)

    })
    $("#one-12").click(function(){
        $("#one-1").animate({
            "top":"10px",
            "left":"150px"
        },1000)
        $("#one-7").hide(1000);
        $("#one-5").animate({
            "top":"400px",
            "left":"1000px"
        },2000)
        $("#one-3").show(1500);
        $("#one-11").hide(1500);
        $("#one-8").hide(1000);
        $("#one-2").show(1000);
        $("#one-8").animate({
            "top":"400px",
            "left":"200px"
        },1000)
        $("#one-6").show(1000);
        $("#one-12").fadeTo(1000,0);
        $("#one-12").animate({
            "top":"300px",
            "left":"300px"
        },1000)
        $("#one-9").fadeTo(1000,0)
        $("#one-10").fadeTo(1000,0)
    })
})