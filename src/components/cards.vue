<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <section>
      <div>
        <center>
        <div><img src="https://strategy2050.kz/storage/realise/87/24/cc/1c/b0/8724cc1cb06b3995030b8ec51195560d.jpg" alt="avatar" class="avatar"></div></center>
      </div>
      <div>
        <div v-for="company in companies" class="my-name">{{company.name}}</div>
        <div v-for="company in companies" class="my-title">{{company.otrasl}}</div>
        <div class="links">
          <div class="link-item">
            <svg class="icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>
            <a href="http://google.ca">ссылка на сайт</a>
          </div>
          <div v-for="company in companies" class="link-item">
            <svg class="icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"/></svg>
            <a href="mailto:email@email.com">{{company.mail}}</a>
          </div>
          <div v-for="company in companies" class="link-item">
            <svg  class="icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"/></svg>
            <a href="tel:123-456-7890">{{company.phone}}</a>
          </div>
        </div> <!-- end links -->
      </div>
    </section>

    <section>
      <hr>
      <div  class="section-title">Продукция:</div>
      <div>
        <div class="job">
          <div class="job-title-container">
            <div>
              <div v-for="company in companies" class="job-company"><ul><li>{{company.production}}</li></ul></div>
              <div class="job-title"></div>
            </div>
            </div>
          </div> <!-- end job-title container -->
      </div>
      <hr>
    </section>

    <section>
      <div class="section-title">Адрес</div>
      <div>
        <div v-for="company in companies" class="skills-container">
          <ul>
            <li>{{company.address}}</li>
          </ul>
        </div> <!-- end skills-container -->

      </div>
      <hr>
    </section>

    <section>
      <div class="section-title"></div>
      <div class="interests-container">
      </div>
    </section>

    <section>
      <div class="section-title"></div>
      <div>
        <div class="job-company"></div>
        <div class="job-title"></div>
        <div class="links">
          
        </div> <!-- end links -->

       
        <div class="reference"></div>
      </div>
    </section>

  </div>
</body>
</html>

</template>

<style >
    
    html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.5;
  background: #F2F2F2;
  color: #323232;
}

img {
  max-width: 100%;
}

.icon {
  fill: currentColor;
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
}

a {
  color: #323232;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  max-width: 960px;
  margin: 40px auto;
  padding: 32px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

section {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid lightgrey;
}

section:last-child {
  border-bottom: none;
}

.section-title {
  font-weight: bold;
  font-size: 18px;
  margin-top:20px;
}

/***********************************
* =Main Info
***********************************/

img.avatar {
  width: 250px;
  display: block;
  margin: 0px;
}

.my-name {
  font-size: 48px;
  line-height: 1;
  margin-bottom: 20px;
  text-align: center;
}

.my-title {
  font-size: 24px;
  font-weight: 300;
  color: #236FB2;
  text-align: center;
}

.links {
  display: flex;
  margin: 10px 0 20px 0;
}

.link-item {
  display: flex;
  align-items: center;
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
}

.link-item svg {
  margin-right: 6px;
}

/***********************************
* =Experience
***********************************/

.job {
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid lightgrey;
}

.job:last-child {
  border-bottom: none;
}

.job-title-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 18px;
  margin-top: 20px;
}

.job-company {
  line-height: 1.2;
}

/***********************************
* =Skills
***********************************/

.skills-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 24px;
  margin-top: 20px;
}

.skills-container ul {
  margin-left: 20px;
  list-style-type: disc;
}

/***********************************
* =Interests
***********************************/

.interests-container {
  display: flex;
  justify-content: space-between;
}

.interests-container img {
  height: 35px;
  opacity: 0.75;
}

/***********************************
* =References
***********************************/

.reference {
  font-size: 18px;
}

.reference-details {
  margin-bottom: 20px;
}

@media only screen and (max-width : 768px) {
  section {
    grid-template-columns: 1fr;
  }

  .links, .job-title-container {
    flex-direction: column;
  }

  .skills-container {
    grid-template-columns: 1fr 1fr;
  }

  .interests-container {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .interests-container img {
    margin-right: 32px;
    margin-bottom: 16px;
  }
}

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
        let api = "http://78.40.108.19:8085/company/id/"+ this.companyId
        this.$http.get(api).then(function(data){
          console.log(data)
          this.companies = data.body
        })
      
    }
    },
}

    
   

</script>