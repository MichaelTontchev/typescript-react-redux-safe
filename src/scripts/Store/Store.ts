import { createStore } from 'redux';
import { combinedReducers } from './Reducers/CombinedReducers';
import { IState } from './IState';

export const store = createStore<IState>(combinedReducers);