import React from 'react';
import '../css/style.css';
import {connect} from "react-redux";
import {Link,Redirect} from 'react-router-dom';
 class Login extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return <div className="biaodan">
            {this.props.isLogin?<Redirect to="/shopcar"></Redirect>:''}
            <h2>登录</h2>
            <p>
            <label htmlFor="zhanghu">账户:</label>
           <input type="tetx" value={this.props.username} placeholder=" 请输入账户" id="zhanghu" onChange={e=>this.props.changeUsername(e.target.value)}/>
            </p>
            <p>
             <label htmlFor="password">密码:</label>
           <input type="tetx" value={this.props.password} placeholder=" 请输入密码" id="password" onChange={e=>this.props.changePassword(e.target.value)} />
           </p>
           <p>
               <span  onClick={()=>this.props.login(this.props.username, this.props.password)}>登录</span>             
           </p>
        </div>
    }
}
//接收
const mapStateToProps = (state)=>{
    console.log('state...', state);
    return state.Login
}
//抛到redux
const mapDispatchToProps = (dispatch)=>{
    return {
        changeUsername: (payload)=>dispatch({
            type: 'CHANGE_USERNAME',
            payload:payload
        }),
        changePassword: (payload)=>dispatch({
            type: 'CHANGE_PASSWORD',
            payload:payload
        }),
        login: (username, password)=>{
            if (username == '11' && password == '22'){
                 alert('登陆成功')
                dispatch({
                    type: 'LOGIN'
                })
                
            }else{
                alert('登陆失败');
            }
        },
        logout: ()=>dispatch({
            type: 'LOGOUT'
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);