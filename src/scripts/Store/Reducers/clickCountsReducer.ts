import * as SeamlessImmutable from 'seamless-immutable';
import { Immutable } from 'seamless-immutable';
import { IImmutableReducer } from '../../ReduxIntegration/IImmutableReducer';
import { ICatchallAction } from '../Actions/CatchallAction';
import { IIncreaseClickCountsAction, INCREASE_CLICK_COUNTS } from '../Actions/IncreaseClickCountsAction';

// Specifying what action types we accept allows us to use type guards in our reducer by checking against the
// type literals we have in the actions.

type PossibleClickCountsReducerActions =
	IIncreaseClickCountsAction |
	ICatchallAction;

const initialState = SeamlessImmutable.from(0);

export const clickCountsReducer: IImmutableReducer<number> =
	(state: Immutable<number> = initialState,
		action: PossibleClickCountsReducerActions) => {
		switch (action.type) {
			case INCREASE_CLICK_COUNTS:
				const clicksToAdd = action.payload;

				return SeamlessImmutable.from(state + clicksToAdd);
		}

		return state;
	};