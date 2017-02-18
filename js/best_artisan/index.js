/**
 * Created by nero on 16/9/29.
 */
//查看规则
$('.rule_btn').on('click', function(){
    $('.rule').removeClass('display_none');
});
$('.rule_close_btn').on('click', function(){
    $('.rule').addClass('display_none');
});

$('.index_play_btn').on('click', function(){
    $('.content').show();
    $('.index').animate({transform: 'translateY(-100%)', opacity: 0}, 500, 'ease-in', function(){
        $('.index').remove();
    });
});

function Game(container, options){
    var init_options = {
        play_status: 1,
        init_times: 2
    };
    this.count = 0;
    this.count_plus = function(){
        var count = parseInt($('.niubi_count').text()) + this.count + '';
        switch (count.length){
            case 1:
                count = '0000' + count;
                break;
            case 2:
                count = '000' + count;
                break;
            case 3:
                count = '00' + count;
                break;
            case 4:
                count = '0' + count;
                break;
        }
        $('.niubi_count').text(count);

    };
    if(options){
        for(var prop in options){
            init_options[prop] = options[prop];
        }
    }

    var select = $(container);

    this.box = document.createElement('div');
    this.box.id = 'game_box';
    var no_chance;
    //游戏开始
    this.start = function(){
        $('.success_toast').hide();
        $('.progress_height').height(0);
        if(init_options.init_times > 0){

            $('.play_people_img')[0].src = '../../images/best_artisan/play_people_img.png';

            init_options.play_status && this.append();

            init_options.play_status = !1;

            //$('.play_control_btn').addClass('playing');
            $('.game_over_img').removeClass('game_over_ani');
            $('.clock_arrow').addClass('clock_rotate');
            time_out = setTimeout(function(){
                myGame.end(true);
                //$('.play_control_btn').removeClass('playing');
                $('.clock_arrow').removeClass('clock_rotate');
            }, 10000);
        }else{
            if(no_chance){
                clearTimeout(no_chance);
                $('.game_time_toast').removeClass('in');
            }
            $('.game_time_toast').addClass('in');
            no_chance = setTimeout(function(){
                $('.game_time_toast').removeClass('in');
            }, 1000);
        }

    };

    //游戏结束
    this.end = function(game_over){
        init_options.play_status = 1;

        clearInterval(this.interval);
        if(game_over){
            this.showToast(this.count);
        }


        this.box.remove();

        this.count_plus();

        this.count = 0;
        init_options.init_times --;
        if(init_options.init_times === 1){
            $('.play_control_btn img').attr('src', '../../images/best_artisan/play_again_btn.png');
        }
    };

    this.showToast = function(count){
        $('.success_count').text(count);
        $('.success_toast').show();
        setTimeout(function(){
            $('.success_toast').hide()
        }, 1000)
    };

    //game over
    this.gameOver = function(){
        this.end(false);
        $('.play_people_img')[0].src = '../../images/best_artisan/play_people_game_over.png';
        Boom();
        $('.game_over_img').addClass('game_over_ani');
        $('.play_control_btn').removeClass('playing');
    };

    //显示图片,点击增加分数
    this.showImg = function(target, obj){
        var that_obj = obj;
        this.interval = setInterval(function(){
            var img, random_num = Math.random();
            if(random_num < 0.3){
                img = new CreateImg('boom');
                img.onclick = function(e){

                    that_obj.count = 0;
                    that_obj.gameOver();
                    clearTimeout(time_out);
                    $('.progress_height').css('height', that_obj.count + '%');
                    $('.clock_arrow').removeClass('clock_rotate');
                    img.remove();
                };
            }else if(random_num >= 0.3 && random_num < 0.5){
                img = new CreateImg('apple');
                img.onclick = function(){

                    that_obj.count ++;
                    $('.progress_height').css('height', that_obj.count + '%');
                    img.remove();
                };
            }else if(random_num >= 0.5 && random_num < 0.7){

                img = new CreateImg('blower');
                img.onclick = function(){

                    that_obj.count ++;
                    $('.progress_height').css('height', that_obj.count + '%');
                    img.remove();
                };
            }else{
                img = new CreateImg('banana');
                img.onclick = function(){

                    that_obj.count ++;
                    $('.progress_height').css('height', that_obj.count + '%');
                    img.remove();
                };
            }
            target.appendChild(img);
            setTimeout(function(){
                img.remove()
            }, 1500)
        }, 500)
    };

    //将小图片添加到游戏里
    this.append = function(){
        this.count = 0;
        select[0].appendChild(this.box);
        var game_box = this.box;
        this.showImg(game_box, this)
    }

}

function CreateImg(category){
    var img = document.createElement('img');
    img.src = '../../images/best_artisan/icon_'+ category +'.png';
    img.className = 'icon_'+category;
    var top_random = Math.random(), left_random = Math.random();
    console.log(top_random, left_random);
    if(top_random < 0.5){
        img.style.top = Math.random()*50  + '%';
    }else{
        img.style.bottom = Math.random()*50  + '%';
    }
    if(left_random < 0.5){
        img.style.left = Math.random()*50  + '%';
    }else{
        img.style.right = Math.random()*50  + '%';
    }

    return img
}
function Boom(){
    $('.progress_height').css('height', 0);
    $('.mask').addClass('show');
    $('.boom_img').css('transform', 'scale(1,1)');
    setTimeout(function(){
        $('.mask').removeClass('show');
        $('.boom_img').css('transform', 'scale(0,0)');
    }, 1200);
}




var myGame = new Game('.play_body_content', {init_times: 2}),
    login = false;
var time_out = null;
$('.play_control_btn').on('click', function(){

    if(!login){
        $('.login').css({top: 0, display: 'table'});
        $('.mask').addClass('show');

    }else if(login && !$(this).hasClass('playing')){
        myGame.start();

    }

    /*$('.clock_arrow').animate({'transform': 'rotate(360deg)'}, 10000, function(){
        myGame.end();
        $('.clock_arrow').css({'transform': 'rotate(0deg)', 'transition': 'none'})
    });*/

});

$('.login_btn').on('click', function(){
    login = true;
    $('.login').css({top: '100%', display: 'none'});
    $('.mask').removeClass('show');
});