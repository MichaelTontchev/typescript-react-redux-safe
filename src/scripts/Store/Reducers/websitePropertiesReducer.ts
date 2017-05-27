import * as SeamlessImmutable from 'seamless-immutable';
import { Immutable } from 'seamless-immutable';
import { IImmutableReducer } from '../../ReduxIntegration/IImmutableReducer';
import { IWebsiteProperties } from '../IState';
import { ICatchallAction } from '../Actions/CatchallAction';
import { IChangeWebsiteNameAction, CHANGE_WEBSITE_NAME } from '../Actions/ChangeWebsiteNameAction';

// Specifying what action types we accept allows us to use type guards in our reducer by checking against the
// type literals we have in the actions.

type PossibleWebsitePropertiesReducerActions =
	IChangeWebsiteNameAction |
	ICatchallAction;

const initialState = SeamlessImmutable.from({
	name: 'initialName',
});

export const websitePropertiesReducer: IImmutableReducer<IWebsiteProperties> =
	(state: Immutable<IWebsiteProperties> = initialState,
		action: PossibleWebsitePropertiesReducerActions) => {
		switch (action.type) {
			case CHANGE_WEBSITE_NAME:
				const newState = {...state}; // Always clone your state - never mutate it directly!

				const newName = action.payload;

				newState.name = newName;

				return SeamlessImmutable.from(newState);
		}

		return state;
	};