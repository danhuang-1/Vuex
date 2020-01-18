import {INCREMENT} from "./mutations-types";
export default{
		[INCREMENT](state){
			state.counter++
		},
		incr(state,count){
			state.counter+=count
		},
		inc(state,count){
			state.counter-=count
		},
		addStudent(state,stu){
			state.students.push(stu)
		},
		UpdateInfo(state){
			state.info.name='123'
			//响应式添加
//			Vue.set(state.info,'address','广安')
//			Vue.delete(state.info,'age')
		}
}
