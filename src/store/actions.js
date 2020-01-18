export default{
		aUpdateInfo(context,payload){
			return new Promise((resolve,reject) => {
			setTimeout(() => {
			context.commit('UpdateInfo')
			console.log(payload);
			resolve('111111')
			},1000)
			})
		}
}
