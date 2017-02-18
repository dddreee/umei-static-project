/**
 * Created by nero on 16/11/14.
 */
$('html').css('font-size', $(window).width()/375*100);
if(typeof Swiper !== 'undefined') {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画

        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

            if (swiper.activeIndex == 2) {
                swiper.removeSlide([0, 1]); //移除前两个引导slide
                swiper.destroy(true, true);
                $('.container').removeClass('swiper-container');

            }
        }
        //nextButton: '.next_btn'
    });
}
var file_data = '',
    user_name = '',
    artisan_name = '',
    user_phone = '',
    test = /^(0|86|17951)?(13[0-9]|14[5789]|15[012356789]|17[0123456789]|18[0-9])[0-9]{8}$/;

//切换下一页
$('.next_btn').on('click', function(){
    mySwiper.slideNext()
});

//点击报名btn显示 dialog
$('.index_btn').on('click', function(e){
    $('.mask').addClass('show');
    $('.sign').css({
        'transform': 'scale(1,1)',
        '-webkit-transform': 'scale(1,1)'
    });
});

//关闭dialog
$('.close_btn').on('click', function(){
    $('.sign').css({
        'transform': 'scale(0,0)',
        '-webkit-transform': 'scale(0,0)'
    });
    $('.mask').removeClass('show');
});
var file = '';
//选择本地图片
$('.file_btn').on('change', function(){
    file = this.files[0];
    console.log(file);
    var reader = new FileReader();
    if(file){
        reader.readAsDataURL(file);
        reader.onload = function(){
            file_data = this.result;
            $('.label_btn').css('background', 'url('+ file_data +') no-repeat top center/cover');
            sign_up();
        }
    }

});

$('.user_name').on('change', function(){
    user_name = $(this).val();
    /*if(user_name && user_name.trim() !== ''){
        $(this).removeClass('warn').addClass('success');
    }else{
        $(this).removeClass('success').addClass('warn');
    }*/
    sign_up.call(this);

});

$('.phone').on('change', function(){
    user_phone = $(this).val();
    /*if(user_phone.length === 11 && test.test(user_phone)){
        $(this).removeClass('warn').addClass('success');
    }else{
        $(this).addClass('warn').removeClass('success');
    }*/


    sign_up.call(this);
});

$('.artisan_name').on('change', function(){
    artisan_name = $(this).val();
    /*if(artisan_name && artisan_name.trim() !== ''){
        $(this).removeClass('warn').addClass('success');
    }else{
        $(this).removeClass('success').addClass('warn');
    }*/
    sign_up.call(this);

});

$('.sign_up_btn').on('click', function(){

});

//验证信息是否完整
function sign_up(){
    if($(this).hasClass('phone')){
        var phone = $(this).val().trim();
        if(phone.length === 11 && test.test(phone)){
            $(this).removeClass('warn').addClass('success');
        }else{
            $(this).removeClass('success').addClass('warn');
        }
    }else{
        if($(this).val() && $(this).val().trim()){
            $(this).removeClass('warn').addClass('success');
        }else{
            $(this).removeClass('success').addClass('warn');
        }
    }
    if(file_data && user_name.trim() && artisan_name.trim() && user_phone.trim() && user_phone.length === 11 && test.test(user_phone)){
        $('.sign_up_btn')[0].disabled = false;
    }else{
        $('.sign_up_btn')[0].disabled = true;
        //console.log($(this))
    }
}

$('.sign_up_btn').on('click', function(){
    $.ajax({
        type: "post",
        url: '/file/upload',
        data: JSON.stringify({file: file}),
        success: function(){

        }
    })
});
