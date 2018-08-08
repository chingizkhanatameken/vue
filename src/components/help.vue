<template>
	<div>
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
		<h1></h1>
	</div>
</template>