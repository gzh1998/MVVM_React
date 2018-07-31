import React from 'react';
import '../../css/style.css';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';

class Si extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <div className="login">
            {window.sessionStorage.getItem('datas',JSON.stringify(this.props.valname,this.props.valpassword))}
             {this.props.islogin?<Redirect to="/index/yi/list"></Redirect>:''}
        <div className="box">
        <h6><img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1609658694,3875260148&fm=58&s=6946EA12D8B46C9054FDB1E603000035&bpow=121&bpoh=75"/></h6>
        </div>
        <p>
            <label htmlFor="user">账户:</label>
            <input type="text" placeholder=" 请输入你的账户" id="user" value={this.props.valname} onChange={e=>this.props.username(e.target.value)}></input>
        </p>
         <p>
            <label htmlFor="password">密码:</label>
            <input type="text" placeholder=" 请输入你的密码" id="password"  value={this.props.valpassword}  onChange={e=>this.props.password(e.target.value)}></input>
        </p>
        <p>
            <button onClick={()=>this.props.denglu(this.props.valname,this.props.valpassword)}>登陆</button>
        </p>

        </div>
    }
}

const mapStateToProps=(state)=>{
    return{
        valname:state.Login.valname,
        valpassword:state.Login.valpassword,
        islogin:state.Login.islogin     
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        username:(val)=>{
            dispatch({
                type:"USERNAME",
                payload:val
            })
        },
          password:(val)=>{
            dispatch({
                type:"PASSWORD",
                payload:val
            })
        },
        denglu:(name,word)=>{
            // console.log(name)
            // console.log(word)            
            if(name==='11'&&word=='22'){
              alert('登陆成功')
              dispatch({
                  type:'LOGIN'
              })
              window.sessionStorage.setItem('zhi',JSON.stringify([name,word]))
              let userpassword = JSON.parse(window.sessionStorage.getItem('zhi'))
              console.log(userpassword)
            }else{
                alert("账户或密码错误")
            }
            
            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Si)