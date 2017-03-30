// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'


/* components import  引入根组件*/
import Layout from '@/components/layout';
/* 首页组件 */
import IndexPage from '@/pages/index'

/* reset import   全局引入重置样式 */
import '@/assets/css/reset.css';

/* 注册路由组件 */
Vue.use(Router);

/* 将axios赋值到Vue */
Vue.prototype.$http = axios;
Vue.config.productionTip = false;


/* 路由配置 */
let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: IndexPage
        }/*,
        {
            path: '/orderList',
            component: OrderListPage
        },
        {
            path: '/detail',
            component: DetailPage,
            redirect: '/detail/analysis',
            children: [
                {
                    path: 'analysis',
                    component: DetailAnaPage
                },
                {
                    path: 'count',
                    component: DetailCouPage
                },
                {
                    path: 'forecast',
                    component: DetailForPage
                },
                {
                    path: 'publish',
                    component: DetailPubPage
                }
            ]
        }*/
    ]
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: {Layout}
});
