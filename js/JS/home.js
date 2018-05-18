//header
$(document).ready(function(){
    $(".header > .place > #text").hide();

    $(".header > .place").hover(function(){
        $(this).children("#text").show();
        $(this).children(".location").css({
           background:"white",
           border:"1px solid lightgray",
           borderBottom:"1px solid white"
        });
    },function(){
        $(this).children("#text").hide();
        $(this).children(".location").css({
            background:"rgba(223,226,222,0.96)",
            border:"1px solid rgba(223,226,222,0.96)",
            borderBottom:"1px solid lightgray"
        });
    });

});
$(document).ready(function(){
    $(".my > .mytext").hide();
    $(".my").hover(function(){
        $(this).children(".mytext").show();
        $(this).css({
            background:"white",
            border:"1px solid lightgray",
            borderBottom:"1px solid white"
        });
    },function(){
        $(this).children(".mytext").hide();
        $(this).css({
            background:"rgba(223,226,222,0.96)",
            border:"1px solid rgba(223,226,222,0.96)",
            borderBottom:"1px solid lightgray"
        });
    });
});
$(document).ready(function(){
    $(".phone > .phonetext").hide();

    $(".phone").hover(function(){
        $(this).children(".phonetext").show();
    },function(){
        $(this).children(".phonetext").hide();
    });

});
//右侧
$(document).ready(function(){
    $(".type > ul >li >div").hide();

    $(".type > ul > li").hover(function(){
        $(this).css({
            background:"rgba(232,54,50,0.96)",
            borderRadius:"0"
        });
        $(this).children("div").css({
            background:"rgba(232,54,50,0.96)"
        });
        $(this).children("div").animate({
            width:'toggle'
        });
    },function(){
        $(this).css({
            background:"gray",
            borderRadius:"2px"
        });
        $(this).children("div").hide();
    });
});
//左侧
$(document).ready(function(){
    $(".page").hide();

    $(".menu > ul >li").hover(function(){
        $(this).children(".page").show();
    },function(){
        $(this).children(".page").hide();
    });

});
//购物车
$(document).ready(function(){
    $(".add").hide();

    $(".car").hover(function(){
        $(this).children(".add").show();
        $(".car").css({
            borderBottom:"1px solid white"
        });
        $(".add").css({
           borderTop:"none"
        });
    },function(){
        $(this).children(".add").hide();
        $(".car").css({
            borderBottom:"1px solid lightgray"
        });
    });

});
//轮播图
$(function(){
    setInterval(function(){
        changeList("right");
    },2000);
    $(".left-button").click(function(){
        changeList("left");
    });
    $(".right-button").click(function(){
        changeList("right");
    });
    $(".dian i").click(function(){
        var i = $(".dian i").index(this);
        changeList(i);
    });
});
var index = 0;
function changeList(x){
    if(!isNaN(x)){
        index = x;
    }else if(x == "left"){
        index --;
        if(index < 0) index = 5;
    }else if(x == "right"){
        index ++;
        if(index > 5) index = 0;
    }
    var len = -index * 600 + "px";
    $(".slide").animate({
        marginLeft:len
    });
    $(".dian i").removeClass("fa-circle").eq(index).addClass("fa-circle");
}
//遮罩
$(document).ready(function(){
    $(".mask").hide();
    $(".zhe > ul >li").hover(function(){
        $(this).find(".mask").show();
    },function(){
        $(".mask").hide();
    });
});
//tab页
$(document).ready(function(){
    $(".top li").on("mouseover",function(){
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $(".top i").addClass("none");
        $(this).find("i").removeClass("none");
        var i=$(".top li").index(this);
        $(".infor").addClass("none").eq(i).removeClass("none");
    });
});
//抢购
$(function(){
    $(".left-click").click(function(){
        changeGoods("left");
    });
    $(".right-click").click(function(){
        changeGoods("right");
    });
});
var index1 = 0;
function changeGoods(x){
    if(!isNaN(x)){
        index1 = x;
    }else if(x == "left"){
        index1 --;
        if(index1 < 0) index1 = 5;
    }else if(x == "right"){
        index1 ++;
        if(index1 > 5) index1 = 0;
    }
    var len = -index1 * 810 + "px";
    $(".slides").animate({
        marginLeft:len
    });
}
//抢最右边轮播图
$(function(){

    var i=0;
    var timer=null;
    for (var j = 0; j < $('.img li').length; j++) { //创建圆点
        $('.num').append('<li></li>')
    }
    $('.num li').first().addClass('active'); //给第一个圆点添加样式

    var firstimg=$('.img li').first().clone(); //复制第一张图片
    $('.img').append(firstimg).width($('.img li').length*($('.img img').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度


    //鼠标划入圆点
    $('.num li').mouseover(function(){
        var _index=$(this).index();
        $('.img').stop().animate({left:-_index*180},260);
        $('.num li').eq(_index).addClass('active').siblings().removeClass('active');
    })

    //定时器自动播放
    timer=setInterval(function(){
        i++;
        if (i==$('.img li').length) {
            i=1;
            $('.img').css({left:0});
        };

        $('.img').stop().animate({left:-i*180},260);
        if (i==$('.img li').length-1) {
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }
    },3000)

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.banner').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('.img li').length) {
                i=1;
                $('.img').css({left:0});
            };

            $('.img').stop().animate({left:-i*180},260);
            if (i==$('.img li').length-1) {
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },3000)
    })

})
//排行榜
$(document).ready(function(){
    $(".name li").on("mouseover",function(){
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $(".name i").addClass("none");
        $(this).find("i").removeClass("none");
        var i=$(".name li").index(this);
        $(".hezi").addClass("none").eq(i).removeClass("none");

    });
});
$(function(){
    $(".yi i").hover(function(){
        var i = $(".yi i").index(this);
        changePai(i);
    });
});
var index2 = 0;
function changePai(x){
    if(!isNaN(x)){
        index2 = x;
    }else if(x == "left"){
        index2 --;
        if(index2 < 0) index2 = 1;
    }else if(x == "right"){
        index2 ++;
        if(index2 > 1) index2 = 0;
    }
    var len = -index2 * 390 + "px";
    $(".yy").animate({
        marginLeft:len
    });
    $(".yi i").removeClass("fa-circle").eq(index2).addClass("fa-circle");
}
$(function(){
    $(".er i").hover(function(){
        var i = $(".er i").index(this);
        changeTwo(i);
    });
});
var index3 = 0;
function changeTwo(x){
    if(!isNaN(x)){
        index3 = x;
    }else if(x == "left"){
        index3 --;
        if(index3 < 0) index3 = 1;
    }else if(x == "right"){
        index3 ++;
        if(index3 > 1) index3 = 0;
    }
    var len = -index3 * 390 + "px";
    $(".ee").animate({
        marginLeft:len
    });
    $(".er i").removeClass("fa-circle").eq(index3).addClass("fa-circle");
}
$(function(){
    $(".san i").hover(function(){
        var i = $(".san i").index(this);
        changeThree(i);
    });
});
var index4 = 0;
function changeThree(x){
    if(!isNaN(x)){
        index4 = x;
    }else if(x == "left"){
        index4 --;
        if(index4 < 0) index4 = 1;
    }else if(x == "right"){
        index4 ++;
        if(index4 > 1) index4= 0;
    }
    var len = -index4 * 390 + "px";
    $(".ss").animate({
        marginLeft:len
    });
    $(".san i").removeClass("fa-circle").eq(index4).addClass("fa-circle");
}
$(function(){
    $(".si i").hover(function(){
        var i = $(".si i").index(this);
        changeFour(i);
    });
});
var index5 = 0;
function changeFour(x){
    if(!isNaN(x)){
        index5 = x;
    }else if(x == "left"){
        index5 --;
        if(index5 < 0) index5 = 1;
    }else if(x == "right"){
        index5 ++;
        if(index5 > 1) index5= 0;
    }
    var len = -index5 * 390 + "px";
    $(".sisi").animate({
        marginLeft:len
    });
    $(".si i").removeClass("fa-circle").eq(index5).addClass("fa-circle");
}
$(function(){
    $(".wu i").hover(function(){
        var i = $(".wu i").index(this);
        changeFive(i);
    });
});
var index6 = 0;
function changeFive(x){
    if(!isNaN(x)){
        index6 = x;
    }else if(x == "left"){
        index6 --;
        if(index6 < 0) index6 = 1;
    }else if(x == "right"){
        index6 ++;
        if(index6 > 1) index6= 0;
    }
    var len = -index6 * 390 + "px";
    $(".ww").animate({
        marginLeft:len
    });
    $(".wu i").removeClass("fa-circle").eq(index6).addClass("fa-circle");
}
//会买专辑
$(function(){

    var i=0;
    var timer=null;
    for (var j = 0; j < $('.imgone li').length; j++) { //创建圆点
        $('.numone').append('<li></li>')
    }
    $('.numone li').first().addClass('active'); //给第一个圆点添加样式

    var firstimg=$('.imgone li').first().clone(); //复制第一张图片
    $('.imgone').append(firstimg).width($('.imgone li').length*($('.imgone img').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度


    // 下一个按钮
    $('.nextone').click(function(){
        i++;
        if (i==$('.imgone li').length) {
            i=1; //这里不是i=0
            $('.img').css({left:0}); //保证无缝轮播，设置left值
        };

        $('.imgone').stop().animate({left:-i*350},300);
        if (i==$('.imgone li').length-1) {  //设置小圆点指示
            $('.numone li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.numone li').eq(i).addClass('active').siblings().removeClass('active');
        }

    })

    // 上一个按钮
    $('.prevone').click(function(){
        i--;
        if (i==-1) {
            i=$('.imgone li').length-2;
            $('.imgone').css({left:-($('.imgone li').length-1)*350});
        }
        $('.imgone').stop().animate({left:-i*350},300);
        $('.numone li').eq(i).addClass('active').siblings().removeClass('active');
    })
    //鼠标划入圆点
    $('.numone li').mouseover(function(){
        var _index=$(this).index();
        $('.imgone').stop().animate({left:-_index*350},150);
        $('.numone li').eq(_index).addClass('active').siblings().removeClass('active');
    })

    //定时器自动播放
    timer=setInterval(function(){
        i++;
        if (i==$('.imgone li').length) {
            i=1;
            $('.imgone').css({left:0});
        };

        $('.imgone').stop().animate({left:-i*350},300);
        if (i==$('.imgone li').length-1) {
            $('.numone li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.numone li').eq(i).addClass('active').siblings().removeClass('active');
        }
    },3000)

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.bannerone').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('.imgone li').length) {
                i=1;
                $('.imgone').css({left:0});
            };

            $('.imgone').stop().animate({left:-i*350},300);
            if (i==$('.imgone li').length-1) {
                $('.numone li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.numone li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },3000)
    })

})
$(document).ready(function () {
    $(".imgone").hover(function () {
        $(".look").css({
            backgroundColor: "rgba(232, 54, 50, 0.96)",
            border:"1.5px solid rgba(232, 54, 50, 0.96)"
        })
    },function () {
        $(".look").css({
            backgroundColor: "transparent",
            border:"1.5px solid white"
        })
    })
})
//领券中心
$(function(){
    $(".quanclick i").hover(function(){
        var i = $(".quanclick i").index(this);
        changeQuan(i);
    });
});
var index7 = 0;
function changeQuan(x){
    if(!isNaN(x)){
        index7 = x;
    }else if(x == "left"){
        index7 --;
        if(index7 < 0) index7 = 1;
    }else if(x == "right"){
        index7 ++;
        if(index7 > 1) index7= 0;
    }
    var len = -index7 * 390 + "px";
    $(".change").animate({
        marginLeft:len
    });
    $(".quanclick i").removeClass("fa-circle").eq(index7).addClass("fa-circle");
}
$(document).ready(function () {
    $(".quanmask").hide();
    $(".quanlist > ul >li").hover(function () {
        $(this).children(".quanmask").show();
        $(this).children(".more").css({
            color:"rgba(232,54,50,0.96)"
        })
    },function () {
        $(this).children(".quanmask").hide();
        $(".more").css({
            color:"gray"
        })
    })
})
//觅
$(function(){

    var i=0;
    var timer=null;
    for (var j = 0; j < $('.imgtwo li').length; j++) { //创建圆点
        $('.numtwo').append('<li></li>')
    }
    $('.numtwo li').first().addClass('active'); //给第一个圆点添加样式

    var firstimg=$('.imgtwo li').first().clone(); //复制第一张图片
    $('.imgtwo').append(firstimg).width($('.imgtwo li').length*($('.imgtwo img').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度


    // 下一个按钮
    $('.nexttwo').click(function(){
        i++;
        if (i==$('.imgtwo li').length) {
            i=1; //这里不是i=0
            $('.img').css({left:0}); //保证无缝轮播，设置left值
        };

        $('.imgtwo').stop().animate({left:-i*350},300);
        if (i==$('.imgtwo li').length-1) {  //设置小圆点指示
            $('.numtwo li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.numtwo li').eq(i).addClass('active').siblings().removeClass('active');
        }

    })

    // 上一个按钮
    $('.prevtwo').click(function(){
        i--;
        if (i==-1) {
            i=$('.imgtwo li').length-2;
            $('.imgtwo').css({left:-($('.imgtwo li').length-1)*350});
        }
        $('.imgtwo').stop().animate({left:-i*350},300);
        $('.numtwo li').eq(i).addClass('active').siblings().removeClass('active');
    })
    //鼠标划入圆点
    $('.numtwo li').mouseover(function(){
        var _index=$(this).index();
        $('.imgtwo').stop().animate({left:-_index*350},150);
        $('.numtwo li').eq(_index).addClass('active').siblings().removeClass('active');
    })

    //定时器自动播放
    timer=setInterval(function(){
        i++;
        if (i==$('.imgtwo li').length) {
            i=1;
            $('.imgtwo').css({left:0});
        };

        $('.imgtwo').stop().animate({left:-i*350},300);
        if (i==$('.imgtwo li').length-1) {
            $('.numtwo li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.numtwo li').eq(i).addClass('active').siblings().removeClass('active');
        }
    },3000)

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.bannertwo').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('.imgtwo li').length) {
                i=1;
                $('.imgtwo').css({left:0});
            };

            $('.imgtwo').stop().animate({left:-i*350},300);
            if (i==$('.imgtwo li').length-1) {
                $('.numtwo li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.numtwo li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },3000)
    })

})
//发现好货
$(document).ready(function () {
    $(".findbox > ul li").hover(
        function () {
            $(this).children(".findmask").show();
            $(this).children("p").css({
                color:"rgba(232,54,50,0.96)"
            })
        },function () {
            $(this).children(".findmask").hide();
            $(this).children("p").css({
                color:"#333"
            })
        }
    )
})
//会逛
$(document).ready(function () {
    $(".guangmask").hide();
    $(".guang > ul > li").hover(function () {
        $(this).children(".guangmask").show();
    },function () {
        $(this).children(".guangmask").hide();
    })
})
//时尚
$(document).ready(function () {
    $(".fashionmask").hide();
    $(".fashion > div > ul > li").hover(function () {
        $(this).children(".fashionmask").show();
    },function () {
        $(this).children(".fashionmask").hide();
    })
})
$(document).ready(function () {
    $(".fashionmask").hide();
    $(".femail > div > ul > li").hover(function () {
        $(this).children(".fashionmask").show();
        $(this).children("p").css({
            color:"rgba(232,54,50,0.96)"
        })
    },function () {
        $(this).children(".fashionmask").hide();
        $(this).children("p").css({
            color:"black"
        })
    })
})
//渐隐
$(document).ready(function(){
    $(".leavemask").hover(function(){
        $(this).children(".similar").animate({
            opacity:'0.8',
            height:'70px',
            width:'70px',
            borderRadius:"35px",
        })
    },function () {
        $(this).children(".similar").animate({
            opacity:'0',
            height:'0px',
            width:'0px',
            borderRadius:"0",
        });
    })
});
$(document).ready(function () {
    $(".similar").hover(function () {
        $(this).css({
            opacity:'1'
        })
    },function () {
        $(this).css({
            opacity:'0.8'
        })
    })
})
$(document).ready(function () {
    $(".zhibocontent > ul > li").hover(function () {
        $(this).children("div").hide();
    },function () {
        $(this).children("div").show();
    })

})
//推荐
$(function(){

    var i=0;
    var timer=null;
    for (var j = 0; j < $('.imgthree li').length; j++) { //创建圆点
        $('.numthree').append('<li></li>')
    }
    $('.numthree li').first().addClass('active'); //给第一个圆点添加样式

    var firstimg=$('.imgthree li').first().clone(); //复制第一张图片
    $('.imgthree').append(firstimg).width($('.imgthree li').length*($('.imgthree .tuijianimg').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度


    // 下一个按钮
    $('.nextthree').click(function(){
        i++;
        if (i==$('.imgthree li').length) {
            i=1; //这里不是i=0
            $('.img').css({left:0}); //保证无缝轮播，设置left值
        };

        $('.imgthree').stop().animate({left:-i*1190},300);
        if (i==$('.imgthree li').length-1) {  //设置小圆点指示
            $('.numthree li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.numthree li').eq(i).addClass('active').siblings().removeClass('active');
        }

    })

    // 上一个按钮
    $('.prevthree').click(function(){
        i--;
        if (i==-1) {
            i=$('.imgthree li').length-2;
            $('.imgthree').css({left:-($('.imgthree li').length-1)*1190});
        }
        $('.imgthree').stop().animate({left:-i*1190},300);
        $('.numthree li').eq(i).addClass('active').siblings().removeClass('active');
    })
    //鼠标划入圆点
    $('.numthree li').mouseover(function(){
        var _index=$(this).index();
        $('.imgthree').stop().animate({left:-_index*1190},150);
        $('.numthree li').eq(_index).addClass('active').siblings().removeClass('active');
    })

    //定时器自动播放
    timer=setInterval(function(){
        i++;
        if (i==$('.imgthree li').length) {
            i=1;
            $('.imgthree').css({left:0});
        };

        $('.imgthree').stop().animate({left:-i*1190},300);
        if (i==$('.imgthree li').length-1) {
            $('.numthree li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.numthree li').eq(i).addClass('active').siblings().removeClass('active');
        }
    },3000)

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.bannerthree').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('.imgthree li').length) {
                i=1;
                $('.imgthree').css({left:0});
            };

            $('.imgthree').stop().animate({left:-i*1190},300);
            if (i==$('.imgthree li').length-1) {
                $('.numthree li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.numthree li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },3000)
    })

})
$(document).ready(function () {
    $(".tuijianmask").hide();
    $(".tuijiancontent").hover(function () {
        $(this).children(".tuijianmask").show();
    },function () {
        $(this).children(".tuijianmask").hide();
    })

})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(document).ready(function () {
    $(".yinpiao").hide();
    $(".bike").hover(function () {
        $(".yinpiao").show();
    },function () {
    })

})
$(document).ready(function(){
    $(".piaokind li").hover(function(){
        $(this).addClass("selecting").siblings("li").removeClass("selecting");
        $(".piaokind i").addClass("none");
        $(this).find("i").removeClass("none");
        var i=$(".piaokind li").index(this);
        $(".piaodetail").addClass("none").eq(i).removeClass("none");
    });
});
$(document).ready(function () {
    $(".yinpiao i").click(function () {
        $(".yinpiao").hide();
    })
})
$(document).ready(function(){
    $(".huafeiname li").hover(function(){
        $(this).addClass("selected").siblings("li").removeClass("selected");
        var i=$(".huafeiname li").index(this);
        $(".huafeidetail").addClass("none").eq(i).removeClass("none");
    });
});
$(document).ready(function(){
    $(".jipiaoname li").hover(function(){
        $(this).addClass("selected").siblings("li").removeClass("selected");
        var i=$(".jipiaoname li").index(this);
        $(".jipiaodetail").addClass("none").eq(i).removeClass("none");
    });
});
$(document).ready(function(){
    $(".jiudianname li").hover(function(){
        $(this).addClass("selected").siblings("li").removeClass("selected");
        var i=$(".jiudianname li").index(this);
        $(".jiudiandetail").addClass("none").eq(i).removeClass("none");
    });
});
$(document).ready(function(){
    $(".youxiname li").hover(function(){
        $(this).addClass("selected").siblings("li").removeClass("selected");
        var i=$(".youxiname li").index(this);
        $(".youxidetail").addClass("none").eq(i).removeClass("none");
    });
});