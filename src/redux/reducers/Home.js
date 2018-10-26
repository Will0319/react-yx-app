import types from '../store/types';
import { reducerCreators } from '../../util';
import { notification } from 'antd';

const initialState = {
    reduxState:0,
    list:[],
    loading:false
}

export default reducerCreators(initialState, {
    [`${types.SET_STATE}`]: (state, data, params) => {
        return Object.assign({}, state, {
            ...params
        });
    },
    [`${types.GET_ISSUES_INFO}_PENDING`]: (state, data, params) => {
        return Object.assign({}, state, {
            loading: true,
        })
    },
    [`${types.GET_ISSUES_INFO}_SUCCESS`]: (state, data, params) => {
        // console.log(data);
        // if (data.code + '' != '0') {
        //     notification.error({
        //         message: '操作提示',
        //         description: data.message
        //     });
        //     return Object.assign({}, state, {
        //         loading: false,
        //     })
        // }
        // const result = data.content;
        return Object.assign({}, state, {
            loading: false,
            list: data
        })
    },
    [`${types.GET_ISSUES_INFO}_ERROR`]: (state, data, params) => {
        return Object.assign({}, state, {
            loading: false,
        })
    },


});
