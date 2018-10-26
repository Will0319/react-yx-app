import types from '../store/types';

export function setState(params) {
    return (dispatch, getState) => {
        dispatch({
            type: types.SET_STATE,
            params
        });
    };
}

// export function getAppList(params) {
//     return (dispatch, getState) => {
//         dispatch({
//             type: types.GET_APP_LIST,
//             payload: {
//                 promise: get_app_list(params)
//             }
//         })
//     }
// }
