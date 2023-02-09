import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Tab from '../components/Tab.vue'
import Login from '../components/Login.vue'
import User from '../components/User.vue'
import Register from '../components/Register.vue'
import About from '../components/about/About.vue'
import Family from '../components/Family.vue'
//二级路由
import Contact from '../components/about/Contact.vue'
import Order from '../components/about/Order.vue'
import History from '../components/about/History.vue'
import Delivery from '../components/about/Delivery.vue'
//三级路由
import Phone from '../components/about/contact/Phone.vue'
import Person from '../components/about/contact/Person.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "home",
    component: Home,
    meta:{
    	login:true
    }
  },
  {
    path: '/tab',
    name: "tab",
    component: Tab
  },
  {
    path: '/menu',
    name: "menu",
    component: Menu
  },
  {
    path: '/login',
    name: "login",
    component: Login
  },
  {
    path: '/user',
    name: "user",
    component: User
  },
  {
    path: '/family',
    name: "family",
    component: Family
  },
  {
    path: '/register',
    name: "register",
    component: Register
  },
  {
    path: '/about',
    name: "about",
    redirect: "/about/contact",
    component: About,
    children: [{
        path: '/about/contact',
        name: "contact",
        redirect: "/about/contact/phone",
        component: Contact,
        children: [{
            path: '/about/contact/phone',
            name: "phone",
            component: Phone
          },
          {
            path: '/about/contact/person',
            name: "person",
            component: Person
          },
        ]
      },
      {
        path: '/about/delivery',
        name: "delivery",
        component: Delivery
      },
      {
        path: '/about/order',
        name: "order",
        component: Order
      },
      {
        path: '/about/history',
        name: "history",
        component: History
      },
    ]
  },
  {
    path: '*',
    redirect: "/"
  } //如果没找到匹配的路径  默认跳转到根路径
]

const router = new VueRouter({
  mode: "history",
  routes
});
router.beforeEach((to, from, next) => {
    let isLogin = localStorage.getItem("isLogin");
    if(to.matched.some(item => item.meta.login)){
      if(isLogin == "t"){
        next();
      }else if((!isLogin && to.name === "login")
      || (isLogin == "f" && to.name === "login")){
        //如果需要登录，并且进去的是login，直接进去
        next();
      }else if((!isLogin && to.name !== "login")
      || (isLogin == "f" && to.name !== "login")){
        //如果需要登录，并且进去的不是是login
        console.log("跳转登录")
        next({name:"login"})
      }
    }else{
      next();
    }
    console.log(to)
})


export default router;
