import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Skins from '@/components/Skins'
import Stream from '@/components/Stream'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/skins',
      name: 'Skins',
      component: Skins
    },
    {
      path: '/stream',
      name: 'Stream',
      component: Stream
    }
  ]
})
