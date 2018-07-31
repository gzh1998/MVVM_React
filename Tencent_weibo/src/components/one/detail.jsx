import React from 'react';

class Detail extends React.Component{
    constructor(props){
        super()
        console.log(props.location)
        if(props.location&&props.location.parmas){
        window.sessionStorage.setItem('data',JSON.stringify(props.location.parmas))
        }
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        let item = this.props.location&&this.props.location.parmas;
        if(!item){
            item = JSON.parse(window.sessionStorage.getItem('data'))
        }
        this.setState({
            data:item
        })
    }
    render(){
        return <div className="detail">
           <p>{this.state.data.main}</p>
           <p><img src={this.state.data.content_img}/></p>


        </div>
    }
}

export default (Detail)