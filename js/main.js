


var tai = $("#tai");
var xiu = $("#xiu");

var sound = document.getElementById("audio");


var main_click = 0;

tai.click(function () {
    main_click = "tai";
    xiu.removeClass("border_hw");
    xiu.removeClass("text-warning");
    tai.addClass("border_hw");
    tai.addClass("text-warning");
    $('.coin').removeClass("d-none");
    $('.coin').addClass("d-inline-block");
    $('body').addClass("animation_body");
    sound.play();
});

xiu.click(function () {
    main_click = "xiu";
    tai.removeClass("border_hw");
    tai.removeClass("text-warning");
    xiu.addClass("border_hw");
    xiu.addClass("text-warning");
    $('.coin').removeClass("d-none");
    $('.coin').addClass("d-inline-block");
    $('body').addClass("animation_body");

    sound.play();
});




function bet(coin) {
    if (coin != "allIn") {
        var my_coin = $("#my_coin").html() * 1;
        my_coin -= coin;
        if (my_coin >= 0) {

            $("#my_coin").html(my_coin);
            var bet_coin = $("#" + main_click + "").html() * 1;
            bet_coin += coin;
            $("#" + main_click + "").html(bet_coin);

            var admin_coin = $("#admin_coin").html() * 1;
            admin_coin += coin;
            $("#admin_coin").html(admin_coin);

        } else {var audio = new Audio('hetxu.mp3'); audio.play();}

    } else {
        var my_coin = $("#my_coin").html() * 1;
        $("#my_coin").html(0);

        var bet_coin = $("#" + main_click + "").html() * 1;
        bet_coin += my_coin;
        $("#" + main_click + "").html(bet_coin);

        var admin_coin = $("#admin_coin").html() * 1;
        admin_coin += my_coin;
        $("#admin_coin").html(admin_coin);
    }


}


function back_bet() {

    var coin_back = $("#" + main_click + "").html() * 1;

    var admin_coin = $("#admin_coin").html() * 1;
    admin_coin -= coin_back;
    $("#admin_coin").html(admin_coin);

    var my_coin = $("#my_coin").html() * 1;
    my_coin += coin_back;
    $("#my_coin").html(my_coin);

    $("#" + main_click + "").html(0);
    tai.html(0);
    xiu.html(0);
}






$("#roll").click(function () {
    $(".lop_mo").css("display", "block");
    $(".btn_roll").css("display", "none");

    $('.coin').removeClass("d-inline-block");
    $('.coin').addClass("d-none");

    $(".dice_text").css("display", "none");


    var xuc_xac_mp3 = document.getElementById("xuc_xac_mp3");

    xuc_xac_mp3.play();
    $(".dice_list").css("display", "none");


    $(".drice_box").addClass("animation_drice_box1");
    setTimeout(function () {
        $(".drice_box").removeClass("animation_drice_box1");
        $(".drice_box").css("bottom", "5px");
        $(".dice_list").css("display", "block");
        $(".dice_btn").css("display", "block");
        xuc_xac_mp3.stop();

    }, 5000)





})

$(".dice_btn").click(function () {




    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    dice3 = Math.floor(Math.random() * 6) + 1;




    var coin_start = $("#my_coin").html() * 1;
    var bet_result, dice_total;
    dice_total = dice1 + dice2 + dice3;



    if (dice_total >= 11 && dice_total <= 18) {
        bet_result = "Tài";
        
        var audio1 = new Audio('tai.mp3'); audio1.play();


        var tai_latter = tai.html() * 2;
        var xiu_latter = xiu.html() * 0;

        var total = tai_latter + xiu_latter;



        var my_coin_latter = $("#my_coin").html() * 1;
        my_coin_latter += total;
        $("#my_coin").html(my_coin_latter);



        var admin_coin_latter = $("#admin_coin").html() * 1;

        admin_coin_latter -= total;

        $("#admin_coin").html(admin_coin_latter);


        tai.html(0);
        xiu.html(0);
        var coin_end = $("#my_coin").html() * 1

    }
    else if (dice_total >= 3 && dice_total <= 10) {
        bet_result = "Xỉu";
        var audio1 = new Audio('xiu.mp3'); audio1.play();
        var tai_latter = tai.html() * 0;
        var xiu_latter = xiu.html() * 2;

        var total = tai_latter + xiu_latter;

        var my_coin_latter = $("#my_coin").html() * 1;

        my_coin_latter += total;
        $("#my_coin").html(my_coin_latter);



        var admin_coin_latter = $("#admin_coin").html() * 1;

        admin_coin_latter -= total;

        $("#admin_coin").html(admin_coin_latter);
        tai.html(0);
        xiu.html(0);
        var coin_end = $("#my_coin").html() * 1
    }




    $(".dice_btn").css("display", "none");
    $(".drice_box").css("bottom", "10000px");
    $("#dice_img_1").attr("src", "xuc_xac/" + dice1 + ".png");
    $("#dice_img_2").attr("src", "xuc_xac/" + dice2 + ".png");
    $("#dice_img_3").attr("src", "xuc_xac/" + dice3 + ".png");

    $(".dice_text").css("display", "block");
    $(".dice_text").html(bet_result);


    if (main_click != 0) {
        $('.coin').removeClass("d-none");
        $('.coin').addClass("d-inline-block");
    }
    $(".lop_mo").css("display", "none");
    $(".btn_roll").css("display", "block");
})

$("#up_coin_btn").click(function(){
    if($("#up_coin_input").val() == "BANCUATHONGDEPTRAI"){
        var audio = new Audio('suss.mp3'); audio.play();
        var my_coin_latter = $("#my_coin").html() * 1;

        my_coin_latter += 2000;

        $("#my_coin").html(my_coin_latter);
        $("#up_coin_input").val("");
        $("#exampleModal").modal("hide");
    }else {
        var audio = new Audio('ngu.mp3'); audio.play();
        $("#up_coin_input").val("");
    }
})
$("#up_coin_btn").click(function(){
    $("#up_coin_input").val("");
})
$("#delte_text_up_coin").click(function(){
    $("#up_coin_input").val("");
})