/**
 * Created by lstfw on 2017/4/24.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import orderList from '@/store/modules/orderList'
import indexData from '@/store/modules/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        indexData,
        orderList
    }
});
