/**
 * Created by Administrator on 2016/5/15.
 */
$(window).load(function () {
    $(".main ul li .rsp").hide();
    var config=[
        {
            "width": 160,
            "top": 0,
            "left": 30,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 200,
            "top": 20,
            "left": 90,
            "opacity": 0.6,
            "zIndex": 3
        },//1
        {
            "width": 240,
            "top": 70,
            "left": 240,
            "opacity": 0.9,
            "zIndex": 4
        },//2
        {
            "width": 282,
            "top": 100,
            "left": 420,
            "opacity": 1,
            "zIndex": 5
        },//3
        {
            "width": 240,
            "top": 70,
            "left": 560,
            "opacity": 0.9,
            "zIndex": 4
        },//4
        {
            "width": 200,
            "top": 20,
            "left": 710,
            "opacity": 0.6,
            "zIndex":3
        },//5
        {
            "width": 160,
            "top": 0,
            "left": 775,
            "opacity": 0.2,
            "zIndex": 2
        }//6
    ]


    $(function assign(){
        //先让图片跑到相应的位置
        var i=0;
        $(".main li").each(function(){
            $(this).animate(config[i],500);
            i++;
        });
    })


    var timer=null;
    //开启定时器
    timer=setInterval(function () {
        config.push(config.shift());
        $(function assign(){
            //先让图片跑到相应的位置
            var i=0;
            $(".main li").each(function(){
                $(this).animate(config[i],500);
                i++;
            });
        })
    },1000)

    //鼠标放上，清空定时器
    $(".main li").mouseenter(function () {
        clearInterval(timer)
    })

    //鼠标离开，开启定时器
    $(".main li").mouseleave(function () {
        timer=setInterval(function () {
            config.push(config.shift());
            $(function assign(){
                //先让图片跑到相应的位置
                var i=0;
                $(".main li").each(function(){
                    $(this).animate(config[i],500);
                    i++;
                });
            })
        },1000)
    })

    $(function(){
        $(".main ul li .rsp").hide();
        $(".main ul li").hover(function(){
                $(this).find(".rsp").stop().fadeTo(500,0.5)
                $(this).find(".text").stop().animate({left:'0'}, 500)
            },
            function(){
                $(this).find(".rsp").stop().fadeTo(500,0)
                $(this).find(".text").stop().animate({left:'220'}, {duration: "fast"})
                $(this).find(".text").animate({left:'-220'},0)
            });
    });










})