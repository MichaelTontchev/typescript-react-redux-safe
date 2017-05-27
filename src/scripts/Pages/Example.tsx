import * as React from 'react';
import { MyPageReduxContainer } from './MyPage';
import { MyPageNormalReact } from './MyPageNormalReact';

export const Example = () => (
	<div className="example">
		<h2>Michael's Redux Emporium And More</h2>
		<h3>Low prices on component re-renders!</h3>
		<p>One of the nice things about Redux's reliance on immutability is that when connected with
			React, it overrides shouldComponentUpdate by doing a shallow reference comparison
			on the state and props to see whether a component should rerender. If the reference
			of the state and props is the same, it will not rerender the component, saving you
			those sweet, sweet CPU cycles! :) See below!
		</p>
		<MyPageReduxContainer />
		<p>But wait. What would React's normal behavior be like? Here is MyPage and MyInnerElement
			implemented with normal React. Notice that every time the parent rerenders, so does the child!</p>
		<MyPageNormalReact />
	</div >);