<template>
  <div id="app">
  	<h2>------moduleA-----</h2>
  	<h2>{{$store.state.a.name}}</h2>
  	<button @click="updateName">修改名字</button>
  	<h2>{{$store.getters.fullname2}}</h2>
  	<h2>----------------</h2>
  	
   <h2>{{message}}</h2>
   <h2>{{$store.state.counter}}</h2>
   <!--<button @click="$store.state.counter++">+</button>-->
   <button @click="addition">+</button>
  <h3>------hello-vuex--------</h3>
   
  <hello-vuex/>
  
  <h3>------getters--------</h3>
  <h2>{{$store.getters.powerCounter}}</h2>
  <h1>--------------------</h1>
  <h3>{{$store.getters.mor}}</h3>
  <h1>--------------------</h1>
  <h3>{{$store.getters.morAge(1)}}</h3>
  <h1>--------------------</h1>
  <button @click="addCount(5)">+5</button>
  <button @click="addCoun(5)">-5</button>
  <button @click="addStu()">添加学生</button>
   <h1>---------info-----------</h1>
     <h1>{{$store.state.info}}</h1>
     <button @click="UpdateInfo">修改</button>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT} from './store/mutations-types'
export default {
  name: 'App',
 components: {
	HelloVuex
},
  data(){
  	return{
  		message:'我是App组件'
  	}
  },
  methods:{
  	addition(){
  		this.$store.commit(INCREMENT)
  	},
  	addCount(count){
  		this.$store.commit('incr',count)
  	},
  	addCoun(count){
  		this.$store.commit('inc',count)
  	},
  	addStu(){
  		const stu={id:114,name:'danhuang',age:35}
  		this.$store.commit('addStudent',stu)
  	},
//	UpdateInfo(){
//		this.$store.commit('UpdateInfo')
//		  this.$store.dispatch('aUpdateInfo',{
//		  	message: '我是payload信息',
//		  	success:() => {
//		  		console.log('里面已经完成了');
//		  	}
//		  })
//	}
  	UpdateInfo(){
//		this.$store.commit('UpdateInfo')
		  this.$store.dispatch('aUpdateInfo','我是携带的信息')
		  .then(res => {
		  	console.log('里面完成了提交');
		  	console.log(res);
		  })
  	},
  	updateName(){
  		this.$store.commit('updateName','lisi')
  	}
  }
}
</script>

<style>

</style>
