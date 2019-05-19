import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvarian from 'redux-immutable-state-invariant';
import {devToolsEnhancer} from 'redux-devtools-extension';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        devToolsEnhancer(),
        applyMiddleware(reduxImmutableStateInvarian())
    );
}