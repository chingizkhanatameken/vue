<template>
	<!DOCTYPE html>
	<html style= "overflow: hidden;">
	<body>
		<v-container>
			<v-layout>
				<div id="show-companies">
					<v-flex>
					<h1 class="h1x1">ВСЕ КОМПАНИИ</h1>	
					
					<select v-model="regionSearch2" v-on:change="fetchAddress(); handleSubmit();" class="classic">
						<option value="" selected="selected">Область</option>
						<option v-for="region in regions" v-bind:value="region.regionID" >{{region.region}}</option>
					</select> 
					
                  
					<select :disabled="regionSearch2.length == 0" v-model='addressSearch' v-on:change="handleSubmit();" class="classic">
                        <option value="" selected="selected">Район</option>
						<option v-for="address in addresses" v-bind:value="address.id" >{{address.region}}</option>
					</select>	
					<input type="search" v-model="nameSearch" placeholder="Название"  v-on:change="handleSubmit();" class="classic1" />	
					<input type="search" v-model="otraslSearch" placeholder="Отрасль"  v-on:change="handleSubmit();" class="classic1" />
					<input type="search" v-model="productionSearch" placeholder="Продукция"  v-on:change="handleSubmit();" class="classic1" />
					</v-flex>
					<div v-for="company in searched" class="single-company"> 
						<h2>Названиве:{{company.name}}</h2>
						<h3>Регион:  {{company.region}}</h3>
						<h4>БИН:  {{company.bin}}</h4>
						<h4>Отрасль:  {{company.otrasl}}</h4>
						<h4>Продукция:  {{company.product}}</h4>
						<h4>Aдрес:  {{company.address}}</h4>
						<h4>Почта:  {{company.mail}}</h4>
						<h4>Телефон:  {{company.phone}}</h4>
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
				regions:[],
				addresses:[],
				regionSearch2:'',
				addressSearch:'',
                otraslSearch:'',
                nameSearch:'',
                searched:[],
                productionSearch: ''

			}


		},
		created() {
			this.fetchCompany();
			this.fetchRegion();
			/*this.fetchAddress();*/
			
		},
		methods: {
            
            
			fetchCompany() {
				let api = "http://78.40.108.19:8085/companies"
				this.$http.get(api).then(function(data){
					console.log(data)
					this.companies = data.body
				})
			},
			fetchRegion() {
				let api = "http://78.40.108.19:8085/company/regions"
				this.$http.get(api).then(function(data){
					console.log(data)
					this.regions = data.body
					this.addressSearch = ''
                    this.addresses = ''
                    this.nameSearch = ''
                    this.otraslSearch = ''
                    this.productionSearch = ''
        
				})
			},
			fetchAddress() {
				let api = "http://78.40.108.19:8085/address/filter/" + this.regionSearch2 
			    
			    
				this.$http.get(api).then(function(data){
					console.log(data)
					this.addresses  = data.body
			})
		},
		    handleSubmit() {
		    	 console.log(this.addressSearch + "-----------------------------------------")
					
		    	this.$http.get("http://78.40.108.19:8085/company/filter", {params:  {
		    		regionID: this.regionSearch2,
		    		addressID: this.addressSearch,
		    		name: this.nameSearch,
		    		otrasl: this.otraslSearch,
		    		production : this.productionSearch  




		    	}}).then(function(data){
    	            console.log(this.addressSearch + "-----------------------------------------")
					console.log(data)
					this.searched = data.body
				})
			}
	}
	}		


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Play');


.classic1 {
	background-color: white;
  border: thin #808080;
  border-radius: 4%;
  display: inline-block;
  font: inherit;
  line-height: 155%;
  width: 19.2%;
  padding: 0.5% 3.5% 0.5% 1%;
  border-color: black;
    border-style: solid;

  /* reset */

  margin: 0;      
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
}
select {

  /* styling */
  background-color: white;
  border: thin #808080;
  border-radius: 4%;
  display: inline-block;
  font: inherit;
  width: 19%;
  line-height: 155%;
  padding: 0.5% 3.5% 0.5% 1%;
  border-color: black;
    border-style: solid;

  /* reset */

  margin: 0;      
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
}


/* arrows */

select.classic {
  background-image:
    linear-gradient(45deg, transparent 50%, black 50%),
    linear-gradient(135deg, black 50%, transparent 50%),
    linear-gradient(to right, #808080, #808080);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    100% 0;
  background-size:
    5px 5px,
    5px 5px,
    2.5em 2.5em;
  background-repeat: no-repeat;
}

select.classic:focus {
  background-image:
    linear-gradient(45deg, white 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, white 50%),
    linear-gradient(to right, gray, gray);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    100% 0;
  background-size:
    5px 5px,
    5px 5px,
    2.5em 2.5em;
  background-repeat: no-repeat;
  border-color: black;
  outline: 0;
}

#show-companies {
	max-width: 70%;
	margin:0 auto;
}
.single-company {
	padding: 20px;
	margin:20px 0;
	box-sizing: border-box;
	width: 100%;
	font-family: "Helvetica Neue";
	box-shadow: 0 0 10px rgba(0,0,0,.68);
	left:50%;
}
.h1x1 {
	text-align: center;
	font-family: "HelveticaNeue-Light";
	padding-top: 40px;
	padding-bottom: 40px;
}

</style>