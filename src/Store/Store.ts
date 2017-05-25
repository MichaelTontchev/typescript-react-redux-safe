import { createStore } from 'redux';
import { combinedReducers } from './Reducers/CombinedReducers';
import { IState } from './IState';

export const store = createStore<IState>(combinedReducers);

console.log(store.getState());

const logStateIfChanged = () => {
	let previousStore: any = undefined;

	return () => {
		if (store !== previousStore) {
			console.log('State:');
			console.log(store.getState());

			previousStore = store;
		}
	};
};

// TODO remove
store.subscribe(logStateIfChanged());