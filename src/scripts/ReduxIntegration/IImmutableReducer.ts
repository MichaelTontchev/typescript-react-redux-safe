import { Reducer } from 'redux';
import { ActionCreator } from 'react-redux';
import { Immutable, ImmutableArray } from 'seamless-immutable';
import { IAction } from '../Store/Actions/IAction';

export type IImmutableReducer<T> = Reducer<Immutable<T>>;

export type IImmutableArrayReducer<T> = Reducer<ImmutableArray<T>>;