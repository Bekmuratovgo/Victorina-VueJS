import Vue from 'vue'
import Router from 'vue-router'
import vGame from '../components/Game/v-Game'
import vStat from '../components/Statistic/v-Statistic'
import vQuestion from '../components/Game/v-Question'
import vName from '../components/Name/v-Name'
import vModalFalse from '../components/Modal/v-ModalFalse'
import vModalTrue from '../components/Modal/v-ModalTrue'
import vTimeOut from '../components/Time/v-TimeOut'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/game',
            name: 'game',
            component: vGame,
            props: true
        },
        {
            path: '/statistic',
            name: 'statistic',
            component: vStat,
            props: true
        },
        {
            path: '/question',
            name: 'question',
            component: vQuestion,
            props: true
        },
        {
            path: '/',
            name: 'name',
            component: vName,
            props: true
        },
        {
            path: '/true',
            name: 'true',
            component: vModalTrue,
            props: true
        },
        {
            path: '/false',
            name: 'false',
            component: vModalFalse,
            props: true
        },{
            path: '/ti',
            name: 'ti',
            component: vTimeOut,
            props: true
        },
    ]
})
export default router