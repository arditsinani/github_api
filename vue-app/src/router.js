import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'

Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter(to, from, next) {
        if (localStorage.getItem('token')) {
          router.push({ name: 'profile' });
        } else {
          next();
        }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      props:true,
      beforeEnter(to, from, next) {
        if (!localStorage.getItem('token')) {
          router.push({ name: 'login' });
        } else {
          next();
        }
      }
    },
    {
      path: '/',
      name: 'home',
      beforeEnter:() =>{
        router.push('/login')
      }
    }
  ]
})

export default router;