import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';

Vue.use(Router);

const footer = () => import('@/components/Footer')

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        components: {
            main: () => import('@/pages/index'),
            footer
        },
        meta: {
            title: '蛋黄商城-首页',
        }
    },
    {
        name: 'goods',
        path: '/goods',
        components: {
            main: () => import('@/pages/goods'),
            footer
        },
        meta: {
            title: '蛋黄商城-商品',
        }
    },
    {
        name: 'cart',
        path: '/cart',
        components: {
            main: () => import('@/pages/cart'),
        },
        meta: {
            title: '蛋黄商城-购物车',
            needLogin: true
        }
    },
    {
        name: 'user',
        path: '/user',
        components: {
            main: () => import('@/pages/user/index'),
            footer
        },
        meta: {
            title: '蛋黄商城-会员中心',
            needLogin: true
        }
    },
    {
        name: 'login',
        path: '/user/login',
        components: {
            main: () => import('@/pages/user/login'),
            footer
        },
        meta: {
            title: '蛋黄商城-登录',
        }
    },
    {
        name: 'register',
        path: '/user/register',
        components: {
            main: () => import('@/pages/user/register'),
            footer
        },
        meta: {
            title: '蛋黄商城-注册',
        }
    },
    {
        name: 'detail',
        path: '/detail/:id',
        components: {
            main: () => import('@/pages/detail'),
        },
        meta: {
        }
    }
];

const router = new Router({
    routes, 
    // mode: 'history'
});

router.beforeEach((to, from, next) => {
    if (to.meta.needLogin) {
        if (!store.state.token) {
            router.push({ name: 'login' })
            return          
        }
    }
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export {
  router
};
