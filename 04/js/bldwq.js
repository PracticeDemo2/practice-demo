/**
 * Created by admin on 2016/5/15.
 */
//1.大图片轮播  点击一下换下一张
    //2.小图片和大图片一块轮播  点击大图片和点击右箭头效果一样
    //3.能够让上下图片一起向右滚动  鼠标放上的时候一起停止

$(function () {
    //1.点击一下大图片，转到下一张

    $('.bld-bigImg').click(function () {
        $('.bld-bigImg ul').append($('.bld-bigImg ul li:first'));
        $('.centerImg ul').append($('.centerImg ul li:first'));

    });


//点击右箭头把第一张小图片移动到整个ul的最后
    $('.rightArrow').click(function () {
        $('.bld-bigImg ul').append($('.bld-bigImg ul li:first'));
        $('.centerImg ul').append($('.centerImg ul li:first'));

    });
    //点击左箭头把最后一张小图片移动到整个ul的最前面
    $('.leftArrow').click(function () {
        $('.bld-bigImg ul').prepend($('.bld-bigImg ul li:last'));
        $('.centerImg ul').prepend($('.centerImg ul li:last'));
    });
    //3.1能够让上下图片一起向右滚动  鼠标放上的时候一起停止
    var timer;
    timer = setInterval(function () {
        $('.rightArrow').click();
    }, 1000);
    //3.2.1鼠标放上的时候一起停止
    $('.bld-bigImg,.bld-smallImg').on(
        {
            'mouseenter': function () {
                clearInterval(timer);
            }
        }
    );
    //3.2.1鼠标离开的时候一起开始
    $('.bld-bigImg,.bld-smallImg').on({
        'mouseleave': function () {
            timer = setInterval(function () {
                $('.rightArrow').click();
            }, 1000);
        }

    });
});

