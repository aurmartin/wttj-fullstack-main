import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleware = applyMiddleware(thunk);

export default createStore(reducer, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
