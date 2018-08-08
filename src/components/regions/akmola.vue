<template>
	<!DOCTYPE html>
	<html>
	<body>
		<div id="show-companies">
			<h1 class="h1x1">Компании Зерендинского района</h1>
			<input type="text" v-model="search" name="">
			<div v-for="company in companies" class="single-company"> 
				<h2>Название:{{company.name}}</h2>
				
				<h3>Регион:  {{company.region}}</h3>
				<a>Aдрес:  {{company.adress}}</a>
				<p>Почта:  {{company.mail}}</p>
				<a>Телефон:  {{company.phone}}</a>
			</div>
		</div>
	</div>
</body>
</html>
</template>

<script>
	export default {
		data() {
			return {
				companies:[]
				
			}
		},
		created() {
			let api = "http://10.110.118.87:8085/company/address/0315"
			this.$http.get(api).then(function(data){
				console.log(data)
				this.companies = data.body
			})
		},
		
	} 


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Play');
#show-companies {
	max-width: 800px;
	margin:0 auto;
}
.single-company {
	padding: 20px;
	margin:20px 0;
	box-sizing: border-box;
	background: #80D8FF;
	font-family: 'Play', sans-serif;
	box-shadow: 0 0 10px rgba(0,0,0,.68);
}
.h1x1 {
	padding: 30px;
	text-align: center;
}
body {
	background: url(https://look.com.ua/pic/201209/1280x720/look.com.ua-27529.jpg);     
	background-size: contain;
	height:800px;
}
</style>