import React from 'react';

export default class Toplist extends React.Component{
    constructor(props){
        super();
        //跳转到本页面时把数据存储
        console.log(props.location)
        console.log(props.location.parmas)        
        if(props.location && props.location.parmas){
            window.sessionStorage.setItem('detail',JSON.stringify(props.location.parmas))
        }
        this.state={
            list:[]
        }
    }
    //在render执行后获取yi页面路由传过的来参数
    componentDidMount(){
        let item = this.props.location && this.props.location.parmas;
        //如果不满足两个条件 就给item赋存储的值
        if(!item){
             item = JSON.parse(window.sessionStorage.getItem('detail'));
        }
         //console.log(this.props.location)
        //console.log(this.props.location.parmas)
        this.setState({
            list:item
        })
    }

    render(){
      
        return<div className="list">
                <div className="listson">
                    <div className="listsontop">
                        <p>{this.state.list.action_title}</p>
                        <h3>{this.state.list.title}</h3>
                        <h6>{this.state.list.excerpt}</h6>
                       <p><img src="http://p1.qhimgs4.com/t01631b20733ad425a0.jpg"/></p>
                    </div>
                </div>
        </div>
    }
}