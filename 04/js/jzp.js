$(function () {
    $("#imgList>li").mouseenter(function () {
        $(this).children().eq(1).addClass("opa-class");
    });
    $("#imgList>li").mouseleave(function () {
        $(this).children().eq(1).removeClass("opa-class");
    });
});
/**
 * Created by Administrator on 2016/5/15.
 */
