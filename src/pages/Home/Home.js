import React, {Component} from 'react';
import {Button} from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';
import {setState} from '../../redux/actions/home';
import {hot} from 'react-hot-loader';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick() {
        this.setState({
            count: ++this.state.count
        });
        const { reduxState} = this.props;
        this.props.setState({ reduxState: reduxState+2})
    }

    render() {
        const { reduxState} = this.props;
        return (
            <div className='color'>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                当前Redux计数：{reduxState}<br/>
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
