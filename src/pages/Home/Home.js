import React, {Component} from 'react';
import {Button} from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';
import {setState} from 'actions/home';
import {hot} from 'react-hot-loader';
import { withRouter,Link } from 'react-router-dom';

@withRouter
class Home extends Component {

    state = {
        count: 0
    }

    handleClick=()=> {
        this.setState({
            count: ++this.state.count
        });
        const { reduxState} = this.props;
        this.props.setState({ reduxState: reduxState+2})
    }

    toPage=()=>{
        this.props.history.push({
            pathname:'/page1'
        })
    }

    getInfo=()=>{
        this.props.getIssuesInfo({})
    }

    render() {
        const { reduxState} = this.props;
        return (
            <div>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                当前Redux计数：{reduxState}<br/>
                <Link to='/page1'>Link to page1</Link>
                <p onClick={()=>this.toPage()}>withRouter to page1</p>
                <Button onClick={()=>this.getInfo()}>点击异步获取，并存在redux</Button>
                <Button onClick={() => this.handleClick()}>自增</Button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        reduxState: state.Home.reduxState,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setState: bindActionCreators(setState, dispatch),
    }
}
export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Home));
