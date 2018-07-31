import React from 'react';
import {
    NavLink,
} from 'react-router-dom';
import '../css/style.css';
import Route from '../router/router.jsx';
import '../css/icon/iconfont.css';


class Type extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="wrapper">
            <Route routes={this.props.routes}></Route>
            <footer>
                <NavLink to='/index/one' className="iconfont">&#xe6cd;
        <b>首页</b>
                </NavLink>
                <NavLink to='/index/two' className="iconfont">&#xe6cc;
        <b>设计</b>
                </NavLink>
                <NavLink to='/index/theer' className="iconfont">&#xe620;
        <b>经济</b>
                </NavLink>
                <NavLink to='/index/for' className="iconfont">&#xe620;
        <b>我的</b>
                </NavLink>
            </footer>
        </div>
    }
}

export default Type;