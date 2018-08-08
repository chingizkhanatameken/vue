import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Signup from '@/components/signup'
import Search from '@/components/search'
import Help from '@/components/help'
import Filter from '@/components/filter'
import Akmola from '@/components/regions/akmola'
import Akmola1 from'@/components/rayon/akmola1'
import Aktobe from '@/components/rayon/aktubinskaya'
import Almatinskaya from '@/components/rayon/almatinskaya'
import Almaty from '@/components/rayon/almaty'
import Astana from '@/components/rayon/astana'
import Karagandy from '@/components/rayon/karagandinskaya'
import Kyzylorda from '@/components/rayon/kyzylordinskaya'
import Mangistau from '@/components/rayon/mangistauskaya'
import Pavlodar from'@/components/rayon/pavlodarskaya'
import Shymkent from '@/components/rayon/shymkent'
import SKO from '@/components/rayon/sko'
import Turkestan from '@/components/rayon/turkestanskaya'
import VKO from '@/components/rayon/vko'
import Zhambyl from '@/components/rayon/zhambylskaya'
import ZKO from '@/components/rayon/zko'
import Atyrau from '@/components/rayon/atyrauskaya'
import Kostanay from '@/components/rayon/kostanayskaya'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {title: 'Home'}
    },
    {
     path: '/signup',
      name: 'Signup',
      component: Signup 
    }, {
    path: '/search',
    name: 'Search',
    component: Search 
  },
  {
    path: '/help',
    name: 'Help',
    component: Help 
  },
   {
    path: '/filter',
    name: 'Filter',
    component: Filter 
  },
  {
    path: '/akmola',
    name: 'Akmola',
    component: Akmola 
  },
  {
    path: '/akmola1',
    name: 'Akmola1',
    component: Akmola1 
  },
   {
      path: '/aktobe',
      name: 'Aktobe',
      component: Aktobe
    },
    {
     path: '/almaty',
      name: 'Almaty',
      component: Almaty 
    },
     {
     path: '/almatinskaya',
      name: 'Almatinskaya',
      component: Almatinskaya 
    }, {
    path: '/astana',
    name: 'Astana',
    component: Astana 
  },
  {
    path: '/atyrau',
    name: 'Atyrau',
    component: Atyrau 
  },
   {
    path: '/karagandy',
    name: 'Karagandy',
    component: Karagandy 
  },
  {
    path: '/kostanay',
    name: 'Kostanay',
    component: Kostanay 
  },
  {
    path: '/kyzylorda',
    name: 'Kyzylorda',
    component: Kyzylorda 
  },
   {
    path: '/mangistau',
    name: 'Mangistau',
    component: Mangistau 
  },
  {
    path: '/pavlodar',
    name: 'Pavlodar',
    component: Pavlodar 
  },
  {
    path: '/shymkent',
    name: 'Shymkent',
    component: Shymkent
  },
   {
      path: '/sko',
      name: 'SKO',
      component: SKO
    },
    {
     path: '/turkestan',
      name: 'Turkestan',
      component: Turkestan 
    }, {
    path: '/vko',
    name: 'VKO',
    component: VKO 
  },
  {
    path: '/zhambyl',
    name: 'Zhambyl',
    component: Zhambyl 
  },
   {
    path: '/zko',
    name: 'ZKO',
    component: ZKO 
  }
  ],	
  mode:'history'
})

