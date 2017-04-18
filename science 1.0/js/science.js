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

        $(".iconsb,.fontb").on("click", function() {
                $("body").stop(true).animate({
                    "scrollTop": 0
                }, 1500);
            }) //back to top

        $(".nav a").eq(0).on("click", function() {
            $("body").stop(true).animate({
                "scrollTop": 0
            }, 1500);
        })
        $(".nav a").eq(1).on("click", function() {
            $("body").stop(true).animate({
                "scrollTop": 550
            }, 1500);
        })
        $(".nav a").eq(2).on("click", function() {
            $("body").stop(true).animate({
                "scrollTop": 720
            }, 1500);
        })
        $(".nav a").eq(3).on("click", function() {
            $("body").stop(true).animate({
                "scrollTop": 800
            }, 1500);
        })
        $(".nav a").eq(4).on("click", function() {
            $("body").stop(true).animate({
                "scrollTop": 1320
            }, 1500);
        })
        $(".nav a").eq(5).on("click", function() {
            $("body").stop(true).animate({
                "scrollTop": 2300
            }, 1500);
        })
        $(".nav a").eq(6).on("click", function() {
                $("body").stop(true).animate({
                    "scrollTop": 3500
                }, 1500);
            }) //click the navs' a content ,the scroll to the relative article

        $(".deve").fadeIn(2000);

        $(window).scroll(function() {
                var w_t = $(window).scrollTop();
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