import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
// import {BrowserRouter as Router} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from 'components/App/App';

const history = createHistory();
// 订阅state改变
store.subscribe(() => {
    console.log(store.getState());
});

renderWithHotReload(App);

if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <RootElement/>
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}
