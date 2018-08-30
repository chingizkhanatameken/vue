<template>
<!DOCTYPE html>
<html style= "overflow: hidden;">
<head>
  <title></title>
    
</head>

<div id="show-companies">
         <div v-for="company in companies" class="single-company"> 
    <h2>Название:{{company.name}}</h2>
    <h3>Регион:  {{company.region}}</h3>
    <h4>БИН:  {{company.bin}}</h4>
    <h4>Отрасль:  {{company.otrasl}}</h4>
    <h4>Подотрасль:  {{company.podotrasl}}</h4>
    <h4>Продукция:  {{company.production}}</h4>
    <h4>Aдрес:  {{company.address}}</h4>
    <h4>Почта:  {{company.mail}}</h4>
    <h4>Телефон:  {{company.phone}}</h4>
  </div>
        
          
        </div>
</html>
</template>

<style >
    
    svg {height: 70%;
    width: 70%; 
    padding-top: 20px;
      position: relative;
      top: 0;
      left: 0
    }
     path{
      fill: #004a7a;
      stroke: #FFFFFF;
      transition: fill 0.3s ;
    }
     path:hover {
      fill:#0091EA;
    }
    h1{
      padding-top: 45px;
      font-family: "HelveticaNeue-Light";
      font-size: 1.5rem;

    }
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


#show-companies {
  max-width: 70%;
  margin:0 auto;
}
.single-company {
  
  box-sizing: border-box;
  /*width: 200%;*/
  font-family: "Helvetica Neue";
  
  left:50%;
}
.h1x1 {
  text-align: center;
  font-family: "HelveticaNeue-Light";
  padding-top: 40px;
  padding-bottom: 40px;
}
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
table.fixed { table-layout:fixed; }
table.fixed td { overflow: hidden; }
  </style>

  <script>
  export default {
    


props: ['companyId'],

    data() {
        return {
            companies:[],
        
        }
    },

    mounted() {
        this.fetchCompany();
    },

    methods: {
        fetchCompany() {
        let api = "http://localhost:8085/company/id/"+ this.companyId
        this.$http.get(api).then(function(data){
          console.log(data)
          this.companies = data.body
        })
      
    }
    },
}

    
   

</script>