import * as React from 'react';
import { connect } from "react-redux";
import { IComponentProps } from '../ReactIntegration/IComponentProps';
import { PropAwareMapDispatchToPropsObject } from '../ReduxIntegration/PropAwareMapDispatchToPropsObject';
import { IState, IWebsiteProperties } from '../Store/IState';
import { changeWebsiteName } from '../Store/Actions/ChangeWebsiteNameAction';

interface IMyInnerElementNonReduxState {
	// Delete this interface if no non-redux state exists
}

interface IMyInnerElementStateProps extends IComponentProps {
	websiteProperties: IWebsiteProperties;
}

function mapStateToProps(state: IState): IMyInnerElementStateProps {
	return {
		websiteProperties: state.myStuff.websiteProperties,
	};
}

interface IMyInnerElementDispatchProps {
	changeWebsiteName: typeof changeWebsiteName;
}

const dispatchPropsToActionCreatorMap: PropAwareMapDispatchToPropsObject<IMyInnerElementDispatchProps> = {
	changeWebsiteName: changeWebsiteName,
};

class MyInnerElement extends React.PureComponent<IMyInnerElementStateProps & IMyInnerElementDispatchProps, IMyInnerElementNonReduxState> {
	public render() {
		console.log("MyInnerElement rendered");
		
		return (
			<div className="myInnerElement">
				<div>The current website name is:  {this.props.websiteProperties.name}.</div>
				<br/>
				<div>Type a new name for the website: <input type="text" onChange={this.changeWebsiteName} /></div>
			</div>
		);
	}

	private changeWebsiteName = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.changeWebsiteName(event.target.value);
	}
}

export const MyInnerElementContainer = connect<IMyInnerElementStateProps, IMyInnerElementDispatchProps, {}>(
	mapStateToProps,
	dispatchPropsToActionCreatorMap,
)(MyInnerElement);