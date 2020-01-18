export default{
 	state:{
 		name:'zhangsan'
 	},
 	mutations:{
 		updateName(state,payload){
 		state.name=payload
 		}
 	},
 	actions:{},
 	getters:{
 	 fullname(state){
 		return state.name+'111'
 		},
 	  fullname2(state,getters,rootState){
 	  	return getters.fullname+'222'+rootState.counter
 	  }
 	}
}
