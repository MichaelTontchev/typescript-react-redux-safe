import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';

ReactDOM.render(
	(
		<Provider store={store}>
			<SomeOuterElementContainer/>
		</Provider>
	),
	document.getElementById('reactRoot'),
);