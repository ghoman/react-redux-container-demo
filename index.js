import { createElement } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Container from './src/demo/Container';
import reducer from './src/react-redux-container/lib/reducer';

const store = createStore(combineReducers({ containerReducer: reducer}), applyMiddleware(thunk));

render(createElement(Provider, { store }, createElement(Container, {extra: '随机数'}, null)), document.getElementById('app'));