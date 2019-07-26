import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';

Vue.use(Router);

const footer = () => import('@/components/Footer')

const routes = [
    {
        path: '/',
        redirect: './index'
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
            changeActive: true
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
            changeActive: true
        }
    },
    {
        name: 'cart',
        path: '/cart',
        components: {
            main: () => import('@/pages/cart'),
            footer
        },
        meta: {
            title: '蛋黄商城-购物车',
            changeActive: true,
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
            changeActive: true,
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
            changeActive: true
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
    // 未登录时跳转登陆页
    if (to.meta.needLogin) {
        if (!store.state.token) {
            router.push({ name: 'login' })
            return          
        }
    }
    // 路由变化时自动更改高亮图标
    if (to.meta.changeActive) {
        let params = to.name === 'login' ? params = 'user' : to.name
        sessionStorage.setItem('active', params)
        store.commit('setState', { key: 'active', value: params })
    }

    // 更改网页标题
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export {
  router
};
