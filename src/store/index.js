import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
Vue.use(Vuex)
 
 
 const state={
 	
	counter:1000,
	students:[
	{id:110,name:'110',age:1},
	{id:111,name:'111',age:2},
	{id:112,name:'112',age:3},
	{id:113,name:'113',age:4},
	],
	info:{
		name:'danhuang',
		age:21,
		height:1.11
	}
 }
 
 
const store = new Vuex.Store({
	state,
	mutations,
//	actions:{
//		aUpdateInfo(context,payload){
//			setTimeout(() => {
//			context.commit('UpdateInfo')
//不够优雅	console.log(payload.message);
//			payload.success()
//			},1000)
//		}
//	},
	actions,
	getters,
	modules: {
		a:moduleA
	}
})
export default store