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
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/superAdmin',
    component: () => import('../views/superAdmin/superAdmin.vue'),
    children: [
      {
        path: '/process',
        component: () => import('../views/home/interviewProcess/main.vue'),
        children: [
          {
            path: '/',
            redirect: '/signup'
          },
          {
            path: '/signup',
            component: () =>
              import(
                '../views/home/interviewProcess/signupOrInterview/signup.vue'
              ),
            children: [
              {
                path: '/',
                redirect: '/time'
              },
              {
                path: '/time',
                component: () =>
                  import(
                    '../views/home/interviewProcess/signupOrInterview/signupContent/selectTime.vue'
                  )
              },
              {
                path: '/base',
                component: () =>
                  import(
                    '../views/home/interviewProcess/signupOrInterview/signupContent/baseQuestion.vue'
                  )
              },
              {
                path: '/section',
                component: () =>
                  import(
                    '../views/home/interviewProcess/signupOrInterview/signupContent/sectoralissues.vue'
                  )
              },
              {
                path: '/synth',
                component: () =>
                  import(
                    '../views/home/interviewProcess/signupOrInterview/signupContent/synthesisProblem.vue'
                  )
              }
            ]
          },
          {
            path: '/interview1',
            component: () =>
              import(
                '../views/home/interviewProcess/signupOrInterview/interview1.vue'
              )
          },
          {
            path: '/interview2',
            component: () =>
              import(
                '../views/home/interviewProcess/signupOrInterview/interview2.vue'
              )
          },
          {
            path: '/interview3',
            component: () =>
              import(
                '../views/home/interviewProcess/signupOrInterview/interview3.vue'
              )
          },
          {
            path: '/interview4',
            component: () =>
              import(
                '../views/home/interviewProcess/signupOrInterview/interview4.vue'
              )
          }
        ]
      }
    ]
  }
]
const router = new VueRouter({
  routes
})
export default router
