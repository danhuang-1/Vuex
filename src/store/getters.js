export default{
		powerCounter(state){
			return state.counter * state.counter
		},
		mor(state){
			return state.students.filter(s=>s.age>2)
		},
		morAge(state){
			return function(age){
			 return state.students.filter(s=>s.age>age)
			}
		}
	
}
