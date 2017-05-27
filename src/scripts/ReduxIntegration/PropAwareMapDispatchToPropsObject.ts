import { ActionCreator } from 'react-redux';
import { IAction } from '../Store/Actions/IAction';

export type PropAwareMapDispatchToPropsObject<T> = {
	[P in keyof T]: ActionCreator<IAction<any>> & T[P];
};