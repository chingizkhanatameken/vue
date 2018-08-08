<template>
  <v-app class="main">
    <div></div>
  <v-navigation-drawer floating disable-resize-watcher app  v-model="sideNav"> 
      <v-list> 
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link" exact-active-class>
        <v-list-tile-action>
          <v-icon>{{ item.icon }} </v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title}} </v-list-tile-content>
      </v-list-tile> 
      </v-list>
    </v-navigation-drawer>  
    
    <main>
      
 <v-toolbar scroll-off-screen class="whte">
        <v-toolbar-side-icon @click.native.stop="sideNav=!sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer"><img src="@/assets/atameken.png"></router-link></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}</v-btn>
    </v-toolbar-items>
      </v-toolbar>
      <router-view>
        
      </router-view> 
    </main>
  </v-app>

</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
          { icon: 'person_outline', title: 'Регистрация' },
          { icon: 'location_city', title: 'Компании', link: '/search' },
          { icon: 'help_outline', title: 'Поддержка' },
          
        ],

      }
  },
  name: 'App'
}
</script>
<style>
  .navFont {
    font-family: "HelveticaNeue-Light";
  }

</style>
