import { Immutable, ImmutableArray } from 'seamless-immutable';

// Replace default Action implementation in Redux to use a Flux Standard Actions with seamless-immutable

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