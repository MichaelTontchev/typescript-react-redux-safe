import { Reducer } from 'redux';

export type ReducersMapObject<S> = {
	[K in keyof S]: Reducer<S[K]>;
}