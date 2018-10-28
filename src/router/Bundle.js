import React, {Component} from 'react'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


class Bundle extends Component {
    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    };

    componentWillMount() {
        this.load(this.props)
        NProgress.start();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        });
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        if (this.state.mod){
        NProgress.done();
        }
        return this.props.children(this.state.mod)
    }
}

export default Bundle