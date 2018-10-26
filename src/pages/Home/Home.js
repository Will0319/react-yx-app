import React, {Component} from 'react';
import { Button, Table} from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.less';
import { setState, getIssuesInfo} from 'actions/home';
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
        const { reduxState, loading,list} = this.props;
        const columns = [
            {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',
            render: text => <a href="javascript:;">{text}</a>
            }
        ];
        return (
            <div>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                当前Redux计数：{reduxState}<br/>
                <Button onClick={() => this.handleClick()}>自增</Button>

                <p style={{ marginTop: 30, fontSize: 30}}>跳转test</p>
                <Link to='/page1'>Link to page1</Link>
                <p className="color" onClick={()=>this.toPage()}>withRouter to page1</p>

                <p style={{ marginTop: 30 ,fontSize:30}}>Redux test</p>
                <Table style={{width:400}} columns={columns} dataSource={list} />
                <Button loading={loading} onClick={() => this.getInfo()}>点击异步获取，并存在redux</Button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        reduxState: state.Home.reduxState,
        loading: state.Home.loading,
        list: state.Home.list,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setState: bindActionCreators(setState, dispatch),
        getIssuesInfo: bindActionCreators(getIssuesInfo, dispatch),
    }
}
export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Home));
