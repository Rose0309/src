import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    isLogin:false,
    userInfo: {},
    tabList:[],
    selectedmenucode:"",
    reportH:0
  },
  getters:{
    isLogin(state){
      return !!Object.keys(state.userInfo).length;
    }
  },
  mutations:{
    changeLogin(state,data){
      state.isLogin = data;
    },
    changeUserInfo(state, data){
      state.userInfo = data;
    },
    changeTablist(state, data){
      state.tabList.push(data);
    },
    changeSelectedmenucode(state,data){
      state.selectedmenucode = data;
    } ,
    changeReportH(state,data){
      state.reportH = data;
    }
  },
  actions:{}
});
export default store;
