import * as React from 'react';
import { connect } from "react-redux";
import { IComponentProps } from '../ReactIntegration/IComponentProps';
import { PropAwareMapDispatchToPropsObject } from '../ReduxIntegration/PropAwareMapDispatchToPropsObject';
import { IState } from '../Store/IState';
import { increaseClickCounts } from '../Store/Actions/IncreaseClickCountsAction';
import { MyInnerElementNormalReact } from '../Components/MyInnerElementNormalReact';

interface IMyPageNonReduxState {
	// Delete this interface if no non-redux state exists
}

interface IMyPageState {
	clickCounts: number;
}

export class MyPageNormalReact extends React.Component<{}, IMyPageState> {
	constructor() {
		super();

		this.state = {
			clickCounts: 0,
		};
	}

	public render() {
		console.log("MyPageNormalReact rendered");

		return (
			<div className="myPage">
				<div>
					<h3>Click count: {this.state.clickCounts}</h3>
				</div>
				<div>
					<br />
					<button onClick={this.increaseClickCounts}>Increase click count!</button>
					<br />
				</div>
				<div>
					<br />
					<MyInnerElementNormalReact />
				</div>
			</div>
		);
	}

	private increaseClickCounts = () => {
		const addend = Math.floor(Math.random() * 10) + 1;

		this.setState({
			clickCounts: this.state.clickCounts + addend,
		});
	}
}