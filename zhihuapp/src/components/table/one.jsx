import React from 'react';
import {NavLink} from 'react-router-dom';
import Route from '../../router/router.jsx';
export default class Music extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <header>
            <span>
                <a className="iconfont">&#xe729;</a>
                <input type="text" placeholder="高考状元" />
            </span>
            <a href="#" className="iconfont">&#xe713;提问</a>
         </header>
         <section>
            <div className="sections">
                <ol>
                    <NavLink to="/index/one/yi">推荐</NavLink>
                    <NavLink to="/index/one/er">列表</NavLink>
                    <NavLink to="/index/one/san">热门</NavLink>
                </ol>
            </div>
            <Route routes={this.props.routes}></Route>
            </section>
         </div>
         

    }
}