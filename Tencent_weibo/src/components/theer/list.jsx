import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

class List extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.updata()
          console.log(this.props.list)
    }
    render() {
        if (!this.props.list) {
            return null;
          
        }
        return <div className="list">
            {this.props.list.map((item, index) => {
                //console.log(item)
                return <NavLink to={{
                    pathname:`/detail/${index}`,
                    parmas:item.content
                }} className="listson" key={index}>
                    <h2>{item.name}</h2>
                    <div className="top">
                        <p><img src={item.img} /></p>
                        <span>
                            <b>{item.name}</b>
                            <b>{item.name}</b>
                        </span>
                    </div>
                    <p>{item.name}</p>
                    <p><img src={item.img} /></p>
                </NavLink>

            })}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.List.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updata: () => {
            fetch('/data.json').then(res => {
                return res.json()
            }).then(item => {
                 let num = [];
                item.data.map((item, index) => {
                    item.data.map((item,index)=>{
                     num.push(item)
                    })
                    })
                console.log(num)
                    dispatch({
                        type: "DATA",
                        payload: num 
                })

            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)