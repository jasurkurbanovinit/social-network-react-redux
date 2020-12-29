import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogReducer,
	sidebarPage: sidebarReducer,
});

let store = createStore(reducers);

export default store;
