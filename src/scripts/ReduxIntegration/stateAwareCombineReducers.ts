import { Reducer, combineReducers as originalCombineReducers, ReducersMapObject as OriginalReducersMapObject } from 'redux';
import { ReducersMapObject } from './ReducersMapObject';

// Switch out default combineReducers for our version with our custom, generic ReducersMapObject

export const combineReducers = <S>(reducers: ReducersMapObject<S>) => {
	return originalCombineReducers<S>(reducers as any);
};