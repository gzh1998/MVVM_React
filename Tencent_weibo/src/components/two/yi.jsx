import React from 'react';
import { NavLink } from 'react-router-dom';
import Route from '../../route/router';
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';


class Yi extends React.Component {
    constructor() {
        super()
    }

    render() {
        if (!this.props.islogin) {
            return <Redirect to="/index/si"></Redirect>
        }
        return <div>
            <header>
                <a className="iconfont">&#xe63c;</a>
                <span>
                    <NavLink to="/index/yi/list">列表</NavLink>
                    <NavLink to="/index/yi/hot">热门</NavLink>
                </span>
                <a className="iconfont">&#xe722;</a>
            </header>
            <section>
                <Route routes={this.props.routes}></Route>
            </section>
        </div>

    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        islogin: state.Login.islogin,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Yi);
