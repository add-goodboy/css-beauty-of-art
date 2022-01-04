import Vue from 'vue'
import VueRouter from 'vue-router'
// ????
Vue.use(VueRouter)
const routes = [
	{
		path: '/', // 默认子路由，只能有1个
		name: 'home',
		component: () => import('@/view/home/index'),
		meta: {
			title: '首页'
		}
	}
]

const router = new VueRouter({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes
})

export default router
