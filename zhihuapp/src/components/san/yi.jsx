import React from 'react';
import { NavLink } from 'react-router-dom';
export default class Yi extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch('https://www.easy-mock.com/mock/5b3dd1e253213d0beaa7cd49/api/zhihu').then(res => {
            //console.log(res)
            return res.json();
        }).then(item => {
            console.log(item.data)
            this.setState({
                list: item.data
            })
        })
    }
    render() {
        return <div className="list">
            {this.state.list.map((items, index) => {
                return <NavLink to={{
                    pathname: `/detail/${index}`,
                    parmas:items
                }} className="listson" key={index}>
                    <div className="listsontop">
                        <p>{items.action_title}</p>
                        <h3>{items.title}</h3>
                        <h6>{items.excerpt}</h6>
                        <div className="zan">
                            <span className='iconfont'>点赞&#xe6e8;</span>
                            <span className='iconfont'>反对&#xe6e3;</span>
                        </div>
                    </div>
                </NavLink>
            })}


        </div>
    }
}