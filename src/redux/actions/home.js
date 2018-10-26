import types from '../store/types';
import axios from 'axios';



export function setState(params) {
    return (dispatch, getState) => {
        dispatch({
            type: types.SET_STATE,
            params
        });
    };
}

export function getIssuesInfo(params) {
    return (dispatch, getState) => {
        dispatch({
            type: types.GET_ISSUES_INFO,
            payload: {
                promise: axios.get(`https://api.github.com/repos/Will0319/blog/issues`, {
                }).then((response) => {
                    if (response.status === 200) {
                        // 进行时间格式统一处理
                        // return 
                        const data = response.data;
                        // const list = updateTime(data);
                        return data;
                        // const { dispatch } = this.props;
                        // dispatch(issuesList(list));
                    } else {

                    }
                })
            }
        });
    };
}
