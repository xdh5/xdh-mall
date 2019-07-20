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
        components: {
            main: () => import('@/pages/index'),
            footer
        },
        meta: {
            title: '蛋黄商城-首页'
        }
    },
    {
        name: 'goods',
        components: {
            main: () => import('@/pages/goods'),
            footer
        },
        meta: {
            title: '蛋黄商城-商品'
        }
    },
    {
        name: 'cart',
        components: {
            main: () => import('@/pages/cart'),
        },
        meta: {
            title: '蛋黄商城-购物车'
        }
    },
    {
        name: 'user',
        components: {
            main: () => import('@/pages/user'),
            footer
        },
        meta: {
            title: '蛋黄商城-会员中心'
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

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({
    routes, 
    // mode: 'history'
});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    if (to.name === 'index' || 'goods' || 'cart' || 'user') {
        sessionStorage.setItem("tabbarItem", to.name)
        store.commit('changeTab', sessionStorage.getItem("tabbarItem"))
    }
    next();
});

export {
  router
};
