import { Reducer } from 'redux';

// Use new features in TS > 2 to get type safety in your map of reducers to state properties

export type ReducersMapObject<S> = {
	[K in keyof S]: Reducer<S[K]>;
}