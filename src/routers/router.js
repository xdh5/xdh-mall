import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: 'index',
        component: () => import('@/pages/index'),
        meta: {
            title: '蛋黄商城-首页'
        }
    },
    {
        name: 'goods',
        component: () => import('@/pages/goods'),
        meta: {
            title: '蛋黄商城-商品'
        }
    },
    {
        name: 'cart',
        component: () => import('@/pages/cart'),
        meta: {
            title: '蛋黄商城-购物车'
        }
    },
    {
        name: 'user',
        component: () => import('@/pages/user'),
        meta: {
            title: '蛋黄商城-会员中心'
        }
    }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes, /**mode: 'history' **/});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
