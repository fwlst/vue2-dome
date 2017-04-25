/**
 * Created by lstfw on 2017/4/24.
 */
import axios from 'axios'

/*声明数据*/
const state = {
    options: {},
    boardList: [],
    newsList: [],
    productList: {}
}

/*同步更新store*/
const mutations = {
    updateOptions (state,payload){
        state.options = payload;
    },
    updateBoardList (state,payload){
        state.boardList = payload;
    },
    updateNewsList (state,payload){
        state.newsList = payload;
    },
    updateProductList (state,payload){
        state.productList = payload;
    }
}

/*异步更新store*/
const actions = {
    fatchIndexData ({commit,state}){
        axios.post('api/getIndexData', state.params).then((res) => {
            commit('updateOptions',res.data.options);
            commit('updateBoardList',res.data.boardList);
            commit('updateNewsList',res.data.newsList);
            commit('updateProductList',res.data.productList);
        }, (err) => {

        })
    }
}

/**/
const getters = {
    getOptions: state => state.options,
    getBoardList: state => state.boardList,
    getNewsList: state => state.newsList,
    getProductList: state => state.productList
}
export default {
    state,
    mutations,
    actions,
    getters
}
