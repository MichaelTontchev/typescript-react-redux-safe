import * as React from 'react';
import { connect } from "react-redux";
import { IComponentProps } from '../ReactIntegration/IComponentProps';
import { PropAwareMapDispatchToPropsObject } from '../ReduxIntegration/PropAwareMapDispatchToPropsObject';
import { IState } from '../Store/IState';
import { increaseClickCounts } from '../Store/Actions/IncreaseClickCountsAction';
import { MyInnerElementContainer } from '../Components/MyInnerElement';

interface IMyPageNonReduxState {
	// Delete this interface if no non-redux state exists
}

interface IMyPageStateProps extends IComponentProps {
	clickCounts: number;
}

function mapStateToProps(state: IState): IMyPageStateProps {
	return {
		clickCounts: state.myStuff.clickCounts,
	};
}

interface IMyPageDispatchProps {
	increaseClickCounts: typeof increaseClickCounts;
}

const dispatchPropsToActionCreatorMap: PropAwareMapDispatchToPropsObject<IMyPageDispatchProps> = {
	increaseClickCounts: increaseClickCounts,
};

class MyPage extends React.PureComponent<IMyPageStateProps & IMyPageDispatchProps, IMyPageNonReduxState> {
	public render() {
		console.log("MyPage rendered");

		return (
			<div className="myPage">
				<div>
					<h3>Click count: {this.props.clickCounts}</h3>
				</div>
				<div>
					Notice in the source code that MyPage relies on clickCount, which is only one part of the Redux state.
					When you increase the click count, <strong>the inner element below doesn't update, even though
					it's a child element</strong>! (see console for notifications of rerenders)
					<br />
					<button onClick={this.increaseClickCounts}>Increase click count!</button>
					<br />
					<br />
				</div>
				<div>
					Here is an inner element, which relies on the same overall Redux state, but a different slice of it.
					Notice that when its state updates, its parent does not update.
					<br />
					<br />
					<MyInnerElementContainer/>
				</div>
			</div>
		);
	}

	private increaseClickCounts = () => {
		const addend = Math.floor(Math.random() * 10) + 1;

		this.props.increaseClickCounts(addend);
	}
}

export const MyPageReduxContainer = connect<IMyPageStateProps, IMyPageDispatchProps, {}>(
	mapStateToProps,
	dispatchPropsToActionCreatorMap,
)(MyPage);