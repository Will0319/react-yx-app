import types from '../store/types';
import { reducerCreators } from '../../util';
import { notification } from 'antd';

const initialState = {
    reduxState:0

}

export default reducerCreators(initialState, {
    [`${types.SET_STATE}`]: (state, data, params) => {
        return Object.assign({}, state, {
            ...params
        });
    },
    // [`${types.GET_APP_LIST}_PENDING`]: (state, data, params) => {
    //     return Object.assign({}, state, {
    //         loading: true,
    //     })
    // },
    // [`${types.GET_APP_LIST}_SUCCESS`]: (state, data, params) => {
    //     // console.log(data);
    //     if (data.code + '' != '0') {
    //         notification.error({
    //             message: '操作提示',
    //             description: data.message
    //         });
    //         return Object.assign({}, state, {
    //             loading: false,
    //         })
    //     }
    //     const result = data.content;
    //     return Object.assign({}, state, {
    //         loading: false,
    //         applist: result

    //     })
    // },
    // [`${types.SET_APP_INFO}_ERROR`]: (state, data, params) => {
    //     return Object.assign({}, state, {
    //         loading: false,
    //     })
    // },


});
