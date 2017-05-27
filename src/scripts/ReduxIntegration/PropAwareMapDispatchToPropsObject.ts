import { ActionCreator } from 'react-redux';
import { IAction } from '../Store/Actions/IAction';

// Use new features in TS > 2 to get type safety in your map of dispatch to props for Redux

export type PropAwareMapDispatchToPropsObject<T> = {
	[P in keyof T]: ActionCreator<IAction<any>> & T[P];
};