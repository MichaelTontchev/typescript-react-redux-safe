import { Immutable } from 'seamless-immutable';
import * as SeamlessImmutable from 'seamless-immutable';
import { IAction } from './IAction';

export const CHANGE_WEBSITE_NAME = 'CHANGE_WEBSITE_NAME';

export interface IChangeWebsiteNameAction extends IAction<string> {
	type: 'CHANGE_WEBSITE_NAME'; // Specifying this with a literal type allows us to have type guards in our reducers
	payload: Immutable<string>;
};

export function changeWebsiteName(name: string): IChangeWebsiteNameAction {
	return {
		type: CHANGE_WEBSITE_NAME,
		payload: SeamlessImmutable.from(name),
	};
}