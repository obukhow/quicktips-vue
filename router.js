import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = () => import('~/pages/index').then(m => m.default || m)

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: index
            },
            {
                name: 'post-id',
                path: '/all/:postId',
                component: index
            },
            {
                name: 'tag-id',
                path: '/tags/:tagId',
                component: index
            }
        ]
    })
}
