import * as React from 'react';
import { connect } from "react-redux";
import { IComponentProps } from '../ReactIntegration/IComponentProps';
import { PropAwareMapDispatchToPropsObject } from '../ReduxIntegration/PropAwareMapDispatchToPropsObject';
import { IState, IWebsiteProperties } from '../Store/IState';
import { changeWebsiteName } from '../Store/Actions/ChangeWebsiteNameAction';

interface IMyInnerElementState {
	websiteProperties: IWebsiteProperties;
}

export class MyInnerElementNormalReact extends React.Component<{}, IMyInnerElementState> {
	constructor() {
		super();

		this.state = {
			websiteProperties: {
				name: "initialName"
			},
		};
	}

	public render() {
		console.log("MyInnerElementNormalReact rendered");

		return (
			<div className="myInnerElement">
				<div>The current website name is:  {this.state.websiteProperties.name}.</div>
				<br />
				<div>Type a new name for the website: <input type="text" onChange={this.changeWebsiteName} /></div>
			</div>
		);
	}

	private changeWebsiteName = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			websiteProperties: {
				name: event.target.value
			}
		});
	}
}