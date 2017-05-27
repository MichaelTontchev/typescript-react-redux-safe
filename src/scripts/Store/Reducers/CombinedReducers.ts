import { ReducersMapObject } from '../../ReduxIntegration/ReducersMapObject';
import { combineReducers } from '../../ReduxIntegration/stateAwareCombineReducers';
import { IState } from '../IState';
import { clickCountsReducer } from './clickCountsReducer';
import { websitePropertiesReducer } from './websitePropertiesReducer';

// Use our custom ReducersMapObject to make sure we cover the entire state.

// Note: One issue still remains where nested usage of combineReducers will allow extra properties to be mapped.
// This usually will not be an issue.

const statePropertyToReducerMap: ReducersMapObject<IState> = {
	myStuff: combineReducers({
		clickCounts: clickCountsReducer,
		websiteProperties: websitePropertiesReducer,
	}),
};

export const combinedReducers = combineReducers<IState>(statePropertyToReducerMap);