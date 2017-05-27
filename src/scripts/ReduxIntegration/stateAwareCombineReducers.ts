import { Reducer, combineReducers as originalCombineReducers, ReducersMapObject as OriginalReducersMapObject } from 'redux';
import { ReducersMapObject } from './ReducersMapObject';

export const combineReducers = <S>(reducers: ReducersMapObject<S>) => {
	return originalCombineReducers<S>(reducers as any);
};