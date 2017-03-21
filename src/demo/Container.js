import createContainer from '../react-redux-container';
import DemoComponent from './DemoComponent';
import * as actions from './action'; 

export default createContainer("container", actions, {
	content: '',
	color: 'black',
	historyContents: []
}).bind(DemoComponent);