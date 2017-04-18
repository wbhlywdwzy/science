$(function() {
    'use strict';
    $(".menu").on("click", function() {
            if ($(this).hasClass("h")) {
                $(this).removeClass("h");
            } else {
                $(this).addClass("h");
            }
        }) //click the  menu the nav show;

    $(".nav").on("click", function() {
        $(".menu").addClass("h");
    }); //click the  nav hide ;
    function top(val) {
        $("body").stop(true).animate({
            "scrollTop": val
        }, 1500);
    }
    $(".iconsb,.fontb").on("click", function() {
            top(0)
        });
        //back to top
    $(".nav a").eq(0).on("click", function() {
        top(0)
    })
    $(".nav a").eq(1).on("click", function() {
        top(550)
    })
    $(".nav a").eq(2).on("click", function() {
        top(720)
    })
    $(".nav a").eq(3).on("click", function() {
        top(800)
    })
    $(".nav a").eq(4).on("click", function() {
        top(1320)
    })
    $(".nav a").eq(5).on("click", function() {
        top(2300)
    })
    $(".nav a").eq(6).on("click", function() {
        top(3500)
        }) //click the navs' a content ,the scroll to the relative article

    $(".deve").fadeIn(2000);

    $(window).scroll(function() {
            var w_t = $(window).scrollTop();
            $(".menu").addClass("h");
            if (w_t >= 350) {
                $(".back").fadeIn();
            } else {
                $(".back").fadeOut();
            }
            if (w_t > 0 && w_t < 400) {
                $(".deve").fadeIn(1000);
            } else if (w_t >= 400 && w_t < 1100) {
                $(".span,.first,.second,.third").fadeIn(1000);
            } else if (w_t >= 1100 && w_t < 2300) {
                $(".server .tit").fadeIn(1000);
                $(".server .con").fadeIn(1000);
            } else if (w_t >= 2300 && w_t < 3100) {
                $(".resource .con").fadeIn(1000);
            } else if (w_t >= 3100) {
                $(".company .font,.company ul,.company .pic3").fadeIn(1000);
            }
        }) //content Fadein;
})

$(".btn").on("click", function() {
    $(".map").fadeIn();
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(118.786511, 32.029147);
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
})
$(".closed").on("click", function() {
    $(".map").fadeOut();
})

window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "32"
    },
    "share": {},
    "image": {
        "viewList": ["linkedin", "twi", "people"],
        "viewText": "分享到：",
        "viewSize": "24"
    },
    "selectShare": {
        "bdContainerClass": null,
        "bdSelectMiniList": ["linkedin", "twi", "people"]
    }
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];