import React from 'react';
import '../../css/icon/iconfont.css';
import '../../css/style.css';
import {NavLink} from 'react-router-dom';
import Route from '../../route/router';
import {connect} from "react-redux";
import {Link,Redirect} from 'react-router-dom';

class Index extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <div className="wrapper">
        <Route routes={this.props.routes}></Route>
            <footer>
                <NavLink to="/index/yi">
                <b className="iconfont">&#xe648;</b>
                <span>首页</span>
                </NavLink>
                 <NavLink to="/index/er">
                <b className="iconfont">&#xe60e;</b>
                <span>消息</span>
                </NavLink>
                 <NavLink to="/add">
                <b className="iconfont">&#xe6fb;</b>
                <span>发微博</span>
                </NavLink>
                 <NavLink to="/index/san">
                <b className="iconfont">&#xe729;</b>
                <span>搜索</span>
                </NavLink>
                 <NavLink to="/index/si">
                <b className="iconfont">&#xe647;</b>
                <span>我的</span>
                </NavLink>
            </footer>

        </div>
    }
}



export default (Index)