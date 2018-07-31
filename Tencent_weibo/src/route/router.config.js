//一级
import Index from '../components/one/index';
import Add from '../components/one/add';
import Detail from '../components/one/detail';
//二级
import Yi from '../components/two/yi';
import Er from '../components/two/er';
import San from '../components/two/san';
import Si from '../components/two/si';
//三级
import Hot from '../components/theer/hot';
import List from '../components/theer/list';


export default {
    routes: [{
        path: "/index",
        component: Index,
        children: [{
            path: "/index/yi",
            component: Yi,
            children: [{
                path: "/index/yi/hot",
                component: Hot
            }, {
                path: "/index/yi/list",
                component: List
            }]
        }, {
            path: "/index/er",
            component: Er
        }, {
            path: "/index/san",
            component: San
        }, {
            path: "/index/si",
            component: Si
        }]
    }, {
        path: "/add",
        component: Add
    }, {
        path: "/detail",
        component: Detail
    }, ]
}