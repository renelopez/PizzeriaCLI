import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/common/HomePage'
import DashboardIngredients from '@/components/ingredients/DashboardIngredients'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/ingredients',
      name: 'DashboardIngredients',
      component: DashboardIngredients
    }
  ]
})
