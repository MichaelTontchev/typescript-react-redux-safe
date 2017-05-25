import { Immutable } from 'seamless-immutable';
import * as SeamlessImmutable from 'seamless-immutable';
import { IAction } from './IAction';

export const INCREASE_CLICK_COUNTS = 'INCREASE_CLICK_COUNTS';

export interface IIncreaseClickCountsAction extends IAction<number> {
	type: 'INCREASE_CLICK_COUNTS';
	payload: Immutable<number>;
};

export function increaseClickCounts(toAdd: number): IIncreaseClickCountsAction {
	return {
		type: INCREASE_CLICK_COUNTS,
		payload: SeamlessImmutable.from(toAdd),
	};
}