import { Immutable, ImmutableArray } from 'seamless-immutable';

export interface IState {
	myStuff: IMyStuff;
}

export interface IWebsiteProperties {
	name: string;
}

export interface IMyStuff {
	clickCounts: number;
	websiteProperties: IWebsiteProperties;
}