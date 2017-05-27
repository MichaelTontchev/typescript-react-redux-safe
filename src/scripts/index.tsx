import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { MyPageContainer } from './Pages/MyPage';

ReactDOM.render(
	(
		<Provider store={store}>
			<MyPageContainer />
		</Provider>
	),
	document.getElementById('outermostContainer'),
);