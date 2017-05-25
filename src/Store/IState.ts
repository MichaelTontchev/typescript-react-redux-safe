import { Immutable, ImmutableArray } from 'seamless-immutable';

export interface IState {
	myStuff: {
		clickCounts: number,
		websiteProperties: IWebsiteProperties,
	};
}

export interface IWebsiteProperties {
	name: string;
}