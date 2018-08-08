<template>
	<!DOCTYPE html>
<html>
	<body>
	<v-container id="main">
	    <v-layout >
	<div id="show-companies">
		<h1 class="h1x1">All companies</h1>
		<form @submit.prevent="searchCompany">
		  <p>Please select your preferred contact method:</p>
		  <div>
		    <input type="radio" id="contactChoice1"
		     name="contact" v-model="radioButton" value="otrasl">
		    <label for="contactChoice1">Otrasl</label>

		    <input type="radio" id="contactChoice2"
		     name="contact" v-model="radioButton" value="region">
		    <label for="contactChoice2">Region</label>

		    <input type="radio" id="contactChoice3"
		     name="contact" value="mail">
		    <label for="contactChoice3">Mail</label>
		  </div>
		  <input type="text" v-model="search" placeholder="search companies">
			<button type="submit">Search</button>
		</form>
		
		<div v-if="companySearched" v-for="company in companySearched" class="single-company"> 
			<h2>Название:{{company.name}}</h2>
			<h3>Регион:  {{company.region}}</h3>
			<h4>БИН:  {{company.bin}}</h4>
			<h4>Отрасль:  {{company.otrasl}}</h4>
			<a>Aдрес:  {{company.address}}</a>
			<h4>Почта:  {{company.mail}}</h4>
			<a>Телефон:  {{company.phone}}</a>
		</div>
		<div v-else v-for="company in companies" class="single-company"> 
			<h2>Название:{{company.name}}</h2>
			<h3>Регион:  {{company.region}}</h3>
			<h4>БИН:  {{company.bin}}</h4>
			<h4>Отрасль:  {{company.otrasl}}</h4>
			<a>Aдрес:  {{company.address}}</a>
			<h4>Почта:  {{company.mail}}</h4>
			<a>Телефон:  {{company.phone}}</a>
		</div>
	</div>
		</v-layout>
	</v-container>
</body>
</html>
</template>
<script>
	export default {
		data() {
			return {
				companies:[],
				search: "",
				companySearched: [],
				radioButton: "region"

			}
		},
		created() {
			let api = "http://10.110.118.87:8085/companies"
			this.$http.get(api).then(function(data){
				console.log(data)
				this.companies = data.body
			})
		},
		methods: {
		searchCompany() {
			for (var i = 0; i < this.companies.length; i++) {
				if (radioButton == "region") {
					if (this.companies[i].region == this.search) {
						this.companySearched.push(this.companies[i])
					}
				} else if(radioButton == "otrasl") {
					if (this.companies[i].otrasl == this.search) {
						this.companySearched.push(this.companies[i])
					}
				}
			}

			console.log(this.companySearched)
		}
	}			
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
	text-align: center;
	font-family: 'Play', sans-serif;
	margin-top:35px;
}
     body {

	background: url("../assets/back.png");
    height: 3000px;
}
    
</style>