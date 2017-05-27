export interface IState {
	myStuff: {
		clickCounts: number;
		websiteProperties: IWebsiteProperties;
	};
}

export interface IWebsiteProperties {
	name: string;
}