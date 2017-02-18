/**
 * Created by nero on 16/12/20.
 */

$('html').css('font-size', document.documentElement.clientWidth/375*100);

var data = {
        activityInfo: {
            auid: 'dddreee',
            onlineStatus: 'online',
            shareInfo: {},
            pageColor: 'page_color_grey',
            shopName: '约来约美',
            shopAddress: '定西路727号4A-2',
            pages: [
                {
                    templateId: 'temp_a',
                    title: '约来约美体验中心',
                    shopName: '约来约美体验中心',
                    shopAddress: '定西路727号4A-2',
                    content: [
                        '内容内容内容内容内容内容内容内容内容',
                        '内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
                    ],
                    imgs: [
                        {
                            key: 'asfasd',
                            link: '../../images/shop_activity/rect_bg.png'
                        },
                        {
                            link: '../../images/shop_activity/rect_bg.png'
                        }
                    ]
                },
                {
                    templateId: 'temp_b',
                    title: 'asfasdgfas',
                    shopName: 'agasdfasgasf',
                    shopAddress: 'agasfagas-2',
                    content: [
                        '内容内容内容内容内容内容内容内容内容',
                        '内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
                    ],
                    imgs: [
                        {
                            key: 'asfasd',
                            link: '../../images/shop_activity/rect_bg.png'
                        },
                        {
                            link: '../../images/shop_activity/rect_bg.png'
                        }
                    ]
                },
                {

                }
            ]
        }
};

var temp_a = Vue.extend({
    props: ['page', 'colorStyle', 'name', 'address'],
    data:function(){
        return {
            temp_a_swiper: ''
        }
    },
    computed:{
        src: function(){
            return '../../images/shop_activity/temp_a/temp_a_' + this.colorStyle + '_rectangle.png'
        },
        divide_src:function(){
            return this.colorStyle === 'page_color_grey' ? '../../images/shop_activity/temp_a/temp_a_divide_green.png' : '../../images/shop_activity/temp_a/temp_a_divide_white.png'
        },
        fontColor: function(){
            return 'font_' + this.colorStyle;
        }
    },
    methods: {

        left: function(){
            //console.log(1);
            this.temp_a_swiper && this.temp_a_swiper.slidePrev();
            //this.temp_a_swiper.slidePrev()
        },
        right: function(){
            console.log(2);
            this.temp_a_swiper && this.temp_a_swiper.slideNext();
            //this.temp_a_swiper.slideNext()
        }

    },
    ready: function(){
        //console.log(22222)
        this.temp_a_swiper =  new Swiper('.temp_a_swiper',{
            direction: 'horizontal'
        });
        //console.log(this.left)



    },
    template:   '<div class="swiper-slide temp_a">' +
                    '<figure>' +
                        '<div class="next_btn" @click="right" v-show="page.imgs && page.imgs.length > 1" ></div>' +
                        '<div class="swiper-container swiper-container-h temp_a_swiper" v-if="page.imgs && page.imgs.length > 0">' +
                            '<div class="swiper-wrapper">' +
                                '<div class="swiper-slide temp_a_slide" v-for="img in page.imgs" :style="{background: \'url(\' + img.link +\') no-repeat top center/cover\'}"></div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="prev_btn" @click="left" v-show="page.imgs && page.imgs.length > 1"></div>' +
                    '</figure>' +
                    '<div class="temp_a_divide">' +
                        '<img :src="src" width="100%">' +
                    '</div>' +
                    '<div class="main_content">' +
                        '<div class="content_title">123</div>' +
                        '<div class="content">{{ page.content[0] }}</div>' +

                        '<div class="temp_a_divide">' +
                            '<img :src="divide_src" width="100%">' +
                        '</div>' +

                        '<div class="content">{{ page.content[1] }}</div>' +
                    '</div>' +
                '</div>'
});

var temp_b = Vue.extend({
    props: ['page', 'colorStyle', 'name', 'address'],
    computed: {

    },
    template:   '<div class="swiper-slide temp_b">' +
                    '<div class="title_box">' +
                        '<div class="shop_name">{{ name }}</div>' +
                    '</div>' +
                    '<div class="content_box content_box_0">' +
                        '<div class="content left">{{ page.content[0] }}</div>' +
                    '</div>' +
                    '<div class="figure">' +
                        '<div v-for="img in page.imgs" class="temp_b_img" :class="\'temp_b_img_\' + $index" :style="{background: \'url(\' + img.link + \') no-repeat center / cover\'}" width="100%"></div>' +
                    '</div>' +
                    '<div class="content_box content_box_1">' +
                        '<div class="content left">{{ page.content[1] }}</div>' +
                    '</div>' +
                '</div>'
});

var temp_c = Vue.extend({
    props: ['name', 'page', 'address'],
    template: '<div class="temp_c swiper-slide">' +
    '<div class="shop_name">{{ name }}</div>' +
    '<div class="shop_address">{{ address }}</div>' +
    '<div class="figure">' +
        '<div class="swiper-container temp_c_swiper">' +
            '<div class="swiper-wrapper temp_c_wrapper">' +
                '<div v-for="img in page.imgs" class="swiper-slide temp_c_slide" :style="{background: \'(url\' + img.link + \') no-repeat center / cover\'}"></div>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<div class="content">' +
        '{{ page.content[0] }}' +
    '</div>' +
    '</div>'
});

var temp_d = Vue.extend({
    props: ['name', 'address', 'page'] ,
    template:   '<div class="swiper-slide temp_d">' +
                '<div class="content_box">' +
                    '<div class="temp_d_content_line"></div>' +
                    '<div class="temp_d_tag">{{ page.content[0] }}</div>' +
                    '<div class="shop_name">{{ name }}</div>' +
                    '<div class="temp_d_content_line"></div>' +
                    '<div class="shop_address">{{ address }}</div>' +
                    '<div class="temp_d_tag temp_d_tag_last">{{ page.content[1] }}</div>' +
                '</div>' +
                '<div class="gradient"></div>' +
                '<div class="temp_d_bg_line temp_d_bg_line_1"></div>' +
                '<div class="temp_d_bg_line temp_d_bg_line_2"></div>'+
                '<div class="temp_d_bg_line temp_d_bg_line_3"></div>'+
                '<div class="temp_d_bg_line temp_d_bg_line_4"></div>'+
                '<div class="temp_d_bg_line temp_d_bg_line_5"></div>'+
                '<div class="temp_d_bg_line temp_d_bg_line_6"></div>'+
                '<div class="temp_d_bg_line temp_d_bg_line_7"></div>'+
                '</div>'
});

var temp_e = Vue.extend({
    props: ['name', 'address', 'page'],
    template: '<div class="swiper-slide" content="temp_e">' +
    '<div class="swiper-container temp_e_swiper">' +
    '<div class="swiper-wrapper temp_e_wrapper">' +
    '<div class="swiper-slide temp_e_slide"></div>' +
    '</div>' +
    '</div>' +

    '<div class="content_box">' +
        '<p class="content_title">{{ page.title }}</p>' +
        '<p class="content">{{ page.content[0] }}</p>' +
        '<p class="content">{{ page.content[1] }}</p>' +
    '</div>' +
    '</div>'
});

var discountPage = Vue.extend({
    template: '<div></div>'
});

var vm  = new Vue({
    el: '#app',
    data: {
        activityInfo: data.activityInfo,
        templateMap: {
            temp_a: 'temp-a',
            temp_b: 'temp-b',
            temp_c: 'temp-c',
            temp_d: 'temp-d',
            temp_e: 'temp-e',
        },
        colorMap: {
            page_color_grey: 'grey',
            page_color_orange: 'orange',
            page_color_green: 'green',
            page_color_blue: 'blue',
            page_color_darkblue: 'darkblue',
        }
    },
    components: {
        'temp-a': temp_a,
        'temp-b': temp_b,
        'temp-c': temp_c,
        'temp-d': temp_d,
        'temp-e': temp_e
    },
    ready: function(){
        var swiper = new Swiper('.swiper-container-v', {
            direction: 'vertical'
        });
    }
});



