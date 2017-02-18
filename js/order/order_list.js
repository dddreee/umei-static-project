/**
 * Created by nero on 17/1/20.
 *
 *
 prepay = 1 ; //待支付；

 overdue = 2; // 已过期;到了服务时间未付款

 payed = 3;  //已支付，待接单；

 payfailed = 4; //支付失败，订单对应时间被占用等

 refund = 5; //已退款，发型师超过24小时未接单,或已过服务时间未接单

 accepted = 6;  //已接单，待服务；可取消

 canceled = 7; //已取消

 service = 8; //服务中，服务时间两小时前至服务结束的阶段，不可取消

 addition = 9;  //已服务，有追加服务需付尾款；

 over = 10;  //服务完成，待评价；
 */

var orders = [
    {}
];
var app = Vue.extend({
    props: ['orders', 'status'],
    methods: {
        cancelOrder: function(id){
            console.log(id)
        }
    },

    template: '<ul class="order_list">' +
    '<li class="order_item" v-for="order in orders">' +
    '<div class="order_head">' +
    '<span class="order_status">{{ status[order.status] }}</span>' +
    '<span class="order_no">订单号: {{ order.tradeNo }}</span>' +
    '</div>' +
    '<div class="order_body">' +
    '<div class="order_info">' +
    '<span class="user_avatar" :style="background: url(artisans[order.uuid].avatar.url) no-repeat center / cover"></span>' +
    '<span class="user_name">{{ artisans[order.uuid] }}</span>' +
    '</div>' +
    '<div class="order_content">' +
    '<div class="order_time"><span class="key order_time_title">预约时间</span>{{ order.serviceDateStr + order.serviceTimeStr }}</div>' +
    '<div class="shop_address"><span class="key shop_address_title">预约地点</span>{{ order.address }}</div>' +
    '</div>' +
    '</div>' +
    '<button class="cancel_order" v-if="order.status === \'payed\'" @click="cancelOrder(order.id)">取消订单</button>' +
    '</li>' +
    '</ul>'
});
var vm = new Vue({
    el: '#app',
    data: {
        status: {
            payed: '待接单',
            canceled: '已取消',
            accepted: '已接单',
            over: '已完成'

        }
    },
    components: {

    }
});