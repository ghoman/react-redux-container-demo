import React, { Component, PropTypes, createElement } from 'react';

class DemoComponent extends Component {
	constructor( props, context) {
		super(props, context);
	}

	changeColor(color) {
		this.props.actions.changeColor(color);
	}

	changeContent() {
		const elem = document.getElementById("content");
		if (this.props.content) {
			const history = [...this.props.historyContents];
			history.push(this.props.content);
			this.props.actions.updateHistory(history);
		}

		this.props.actions.changeContent(elem.value);
		elem.value = "";
	}

	removeHistory(index) {
		const history = [...this.props.historyContents];
		history.splice(index, 1);
		this.props.actions.updateHistory(history);
	}

	render() {
		const historyContents = this.props.historyContents.map((item, index) => {
			return <div key={index}>
					<span style={{ width: '150px', height: '30px', lineHeight: '30px', display: 'inline-block'}}>{item}</span>
					<span onClick={this.removeHistory.bind(this, index)}
						style={{width: '100px', height: '30px', display: 'inline-block', textAlign: 'center', color: 'blue'}}>
						[关闭]
					</span>
				</div>
		});

		return <div>
				显示内容: <span style={{color: this.props.color}}>{this.props.content}</span>
				<div style={{backgroundColor: '#e2e2e2'}}>
					<div>历史记录: </div>
					{historyContents.reverse()}
				</div>
				<div style={{ backgroundColor: 'red', width: '100px', height: '50px', color: '#fff', marginTop:'10px'}} 
					onClick={this.changeColor.bind(this, 'red')}>red</div>
				<div style={{ backgroundColor: 'blue', width: '100px', height: '50px', color: '#fff', marginTop:'10px'}} 
					onClick={this.changeColor.bind(this, 'blue')}>blue</div>
				<div style={{ backgroundColor: 'black', width: '100px', height: '50px', color: '#fff', marginTop:'10px'}} 
					onClick={this.changeColor.bind(this, 'black')}>black</div>
				<input id="content" style={{ marginTop: '10px'}}/>
				<button onClick={this.changeContent.bind(this)}>提交</button>
			</div>
	}
}

export default DemoComponent;