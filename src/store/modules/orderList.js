/**
 * Created by lstfw on 2017/4/24.
 */

import axios from 'axios'

/*声明数据*/
const state = {
    orderList:[],
    params: {}
}

/*同步更新store*/
const mutations = {
    updateOrderList (state,payload){
        state.orderList = payload;
    },
    updateParams (state,{key,val}){
        console.log(key,val)
        state.params[key] = val;
    }
}

/*异步更新store*/
const actions = {
    fatchOrderList ({commit,state}){
        axios.post('/api/getOrderList', state.params).then((res) => {
            commit('updateOrderList',res.data.list);
        }, (err) => {

        })
    }
}

/**/
const getters = {
    getOrderList: state => state.orderList
}
export default {
    state,
    mutations,
    actions,
    getters
}
