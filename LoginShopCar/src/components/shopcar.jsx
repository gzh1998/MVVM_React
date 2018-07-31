import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/style.css';

class Shopcar extends React.Component {
    constructor() {
        super(); 
    }

    componentDidMount(){
      this.props.updatalist()
      console.log(this.props.list)
    }

    render() {
        if(this.props.isLogin==false){
            return <Redirect to="/login"></Redirect>
        }
        return <div className="shopcar">
                 <div className="head">购 物 车</div>
                    {this.props.list.map((item,index)=>{
                        return <div className="bodys" key={index}>
                    <input type="checkbox" checked={item.isSell} onChange={(e)=>this.props.checkeds(index)}/>
                        <a id="yss">{item.name}</a>
                <div className="box">
                       <span onClick={()=>this.props.jiajian(index,'-')}>-</span>
                       <span>{item.num}</span>
                       <span onClick={()=>this.props.jiajian(index,'+')}>+</span>                       
                </div>
                <a id="ys">{item.price}</a>
                </div>
                })}
                <h6><label htmlfro="qx">全选:</label><input type="checkbox" id="qx" checked={this.props.isselect} onChange={(e)=>this.props.checkall(e.target.checked)}/></h6>
                <p>数量:<span>{this.props.num}</span> 总价:<span>{this.props.price}</span></p>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.Login.isLogin,
        list:state.Shopcar.list,
         price: state.Shopcar.price,
        isselect:state.Shopcar.isselect
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updatalist:()=>{
             fetch('https://www.easy-mock.com/mock/5af9069b113f91088393ac5f/example/carshop').then(res=>{
          return res.json();
        }).then(body=>{
            console.log(body.data.list)
            dispatch({
                type:'AA',
                payload:body.data.list
            })
        })
    },
    checkeds:(index)=>{
        dispatch({
            type:"CHECKED_S",
            payload:index
        })
        dispatch({
            type:'CONT_PRICE'
        })
    },
    jiajian:(index,type)=>{
        dispatch({
            type:"NUM_PRICE",
            payload:{
                index,
                type
            }
        })
        dispatch({
            type:'CONT_PRICE'
        })
    },
    checkall:(val)=>{
        dispatch({
          type:'CHECK_ALL',  
        })
         dispatch({type: 'SELECT_ALL_ITEM', payload:val})
         dispatch({
             type:'CONT_PRICE'
         })
    }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Shopcar);