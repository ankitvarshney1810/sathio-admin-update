$(document).ready(function(){
    $(".side-btnmenu").click(function(){
        $(".sidebar").toggleClass('closeside');
        $(".side-btnmenu").toggleClass('btnmenuclose');
        $("header").toggleClass('expand-main');
        $("#content").toggleClass('expand-main');
        $("body").toggleClass('overflow-hide');
    });
    $(".btnmenu").click(function(){
        $(".nav-head").toggleClass('header-expand');
    });
});

$(document).ready(function(){
    $(".refund").click(function(){
        $(".refund-box").css('display','block');
        $(".cancel-box").css('display','none');
        $(".refund").addClass('border');
        $(".cancel").removeClass('border');
    });
    $(".cancel").click(function(){
        $(".refund-box").css('display','none');
        $(".cancel-box").css('display','block');
        $(".cancel").addClass('border');
        $(".refund").removeClass('border');
    });
});

// user list page start

$(document).ready(function(){
    $(".view_detail").click(function(){
        $(".modal").css('display','flex');
        $("body").addClass('overflow-hide');
    });
    $(".close").click(function(){
        $(".modal").css('display','none');
        $("body").removeClass('overflow-hide');
    });
});

// user list page end

// post list page start

$(document).ready(function(){
    $('#info-open-01').click(function(){
        $('.info-open-01').css('transform','scale(1)');
    });
    $('#info-close-01').click(function(){
        $('.info-open-01').css('transform','scale(0)');
    });
});

// post list page end