import { ReducersMapObject } from '../../ReduxIntegration/ReducersMapObject';
import { combineReducers } from '../../ReduxIntegration/stateAwareCombineReducers';
import { IState } from '../IState';
import { clickCountsReducer } from './clickCountsReducer';
import { websitePropertiesReducer } from './websitePropertiesReducer';

const statePropertyToReducerMap: ReducersMapObject<IState> = {
	myStuff: combineReducers({
		clickCounts: clickCountsReducer,
		websiteProperties: websitePropertiesReducer,
	}),
};

export const combinedReducers = combineReducers<IState>(statePropertyToReducerMap);