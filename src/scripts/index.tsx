import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { Example } from './Pages/Example';

ReactDOM.render(
	(
		<Provider store={store}>
			<Example />
		</Provider>
	),
	document.getElementById('outermostContainer'),
);