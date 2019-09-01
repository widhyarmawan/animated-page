import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import HomeMobileContainer from './containers/HomeMobileContainer/HomeMobileContainer';
import { isMobile } from 'react-device-detect';

class App extends Component {
	
	render() {
		let routes = <Route exact  path="/" component={HomeContainer}></Route>;
		if (isMobile) {
			routes = <Route exact  path="/" component={HomeMobileContainer}></Route>;
		}
		return (
			<Switch>
				{routes}
			</Switch>
		);
	}
}

export default withRouter(App);
