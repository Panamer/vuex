import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import query from '@/views/query'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shanghai/:success', // 把success加这里  页面刷新的时候params传递的参数就不会丢失了
      name: 'shanghai',
      component: query
    }
  ]
})
