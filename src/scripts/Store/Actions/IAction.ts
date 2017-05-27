import { Immutable, ImmutableArray } from 'seamless-immutable';

export interface IAction<P> {
	type: string;
	payload: Immutable<P>;
	error?: boolean;
	meta?: any;
}

export interface IImmutableArrayAction<P> {
	type: string;
	payload: ImmutableArray<P>;
	error?: boolean;
	meta?: any;
}