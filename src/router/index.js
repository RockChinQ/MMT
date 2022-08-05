import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: () => import('../views/register/register.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home/home.vue'),
    children: [
      {
        path: 'arrangement',
        component: () =>
          import('../views/home/interviewArrangement/interviewArrangement.vue')
      },
      {
        path: 'reply',
        component: () =>
          import('../views/home/interviewReply/interviewReply.vue')
      },
      {
        path: 'resultInform',
        component: () => import('../views/home/interviewReply/resultInform.vue')
      },

      // {
      //   path: 'personalInfo',
      //   component: () =>
      //     import('../views/home/personalIofo/personalIofo.vue')
      // },
      {
        path: 'personalInfo',
        component: () => import('../views/personalInfo/personalInfo.vue')
      }
    ]
  },
  {
    path: '/personalInfo',
    component: () => import('../views/personalInfo/personalInfo.vue')
  },
  {
    path: '/superAdmin',
    component: () => import('../views/superAdmin/superAdmin.vue'),
    children: [
      {
        // 账号管理页面
        path: 'accountManage',
        component: () => import('../views/superAdmin/accountManage/main.vue')
      },
      {
        //面试流程页面
        path: 'process',
        component: () => import('../views/superAdmin/interviewProcess/main.vue')
      },
      {
        path: 'accountManage',
        component: () => import('../views/superAdmin/accountManage/main.vue')
      }
    ]
  }
]
const router = new VueRouter({
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err)
}
export default router
// 路由守卫
//添加路由守卫:：通过判断来决定当前的路由跳转到底能不能进行，这种守卫，只要进行路由的跳转就会自动的触发，不能人为调用
router.beforeEach((to, from, next) => {
  // 判断当前用户是否登陆，如果登陆了则可以跳转，否则重定向到登陆页
  // 获取用户登陆之后的cookie，进行cookie的判断
  if (to.path === '/login' || to.path === '/register') {
    return next()
  }
  let cookies = document.cookie

  if (!cookies) {
    return next('/login')
  }
  next()
})
