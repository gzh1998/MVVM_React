import React from 'react';
//一级路由
import Index from '../components/index.jsx';
import Detail from '../components/detail.jsx';
//二级路由
import One from '../components/table/one.jsx';
import Two from '../components/table/two.jsx';
import Theer from '../components/table/theer.jsx';
import For from '../components/table/for.jsx';
//三级路由
import Yi from '../components/san/yi.jsx';
import Er from '../components/san/er.jsx';
import San from '../components/san/san.jsx';


export default {
    routes: [{
        path: '/detail',
        component: Detail
    }, {
        path: '/index',
        component: Index,
        children: [{
            path: "/index/one",
            component: One,
            children: [{
                path: "/index/one/yi",
                component: Yi
            }, {
                path: "/index/one/er",
                component: Er
            }, {
                path: "/index/one/san",
                component: San
            }]
        }, {
            path: "/index/two",
            component: Two
        }, {
            path: "/index/theer",
            component: Theer
        }, {
            path: "/index/for",
            component: For
        }]
    }]
}