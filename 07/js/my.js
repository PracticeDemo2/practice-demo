/**
 * Created by jf on 2016/5/6.
 */
window.onload = function () {
    //alert("文件引用成功了");

    //找人
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;


    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度


    //鼠标经过盒子显示 渐渐地 箭头
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    }
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    }

    assign();
    function assign() {
        //通过动画函数 让每一个li 渐渐地跑到指定位置
        for (var i = 0; i < lis.length; i++) {
            //让每一个里 渐渐地 到配置文件里指定的位置
            animate(lis[i], config[i], function () {
                flag = true;
            });
        }
    }

    //节流阀
    var flag = true;//可以点击

    //点击右箭头 操作配置单 删除第一个追加到最后
    arrRight.onclick = function () {
        //alert("arrRight");
        if (flag) {//如果是true就执行
            flag = false;
            config.push(config.shift());//操作配置单
            assign();
        }
    }
    //点击左箭头 操作配置单 删除最后的追加的开头
    arrLeft.onclick = function () {
        config.unshift(config.pop());
        assign();
    }


}