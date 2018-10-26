import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers/index';
// import afterApiMiddleware from './MiddleWare/afterApiMiddleware';
import promiseMiddleware from './MiddleWare/promiseMiddleware';
const history = createHistory();
const localRouterMiddleware = routerMiddleware(history);
// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const arr = [localRouterMiddleware, thunk , promiseMiddleware];
if (process.env.NODE_ENV !== 'production') arr.push(createLogger(
    {
        diff: true,
        collapsed: true,
    }
));
// const state = Immutable.fromJS({});
// 创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const store = createStore(reducer, composeEnhancers(applyMiddleware(...arr)));
// store.unsubscribeHistory = history.listen(updateLocation(store));
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
        const nextRootReducer = require('../reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;