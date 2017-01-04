var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
	getInitialState: function () {
			return {
				count: 0,
				countdownStatus: 'paused'
			};
	},
	componentDidUpdate: function (prevProps, prevState) {
		if(this.state.countdownStatus !== prevState.countdownStatus) {
			switch(this.state.countdownStatus) {
				case 'started': 
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
					this.setState({countdownStatus: 'paused'});
				case 'paused':
					clearInterval(this.timer)
					this.time= undefined;
					break;
			}
		}
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count+1;
			this.setState({
				count: newCount
			});
		}, 1000);
	},
	handleSetCountdown: function (seconds) {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},
	handleStatusChange: function (newStatus) {
		this.setState({countdownStatus: newStatus});
	},
	componentWillUnmount: function () { //these detect state changes and can change variables when there are changes. THis is called a lifecycle 
		clearInterval(this.timer);
		this.timer=undefined;
	},
	render: function () {
		var {count, countdownStatus} = this.state;
		var renderControlArea = () => {
		if(countdownStatus !== 'stopped') {
			return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			} else {
			return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			}
		};
		return (
			<div>
				<h1 className="page-title"> Timer App </h1>
				<Clock totalSeconds={count}/>
				{renderControlArea()}
			</div>
		);	
	}
});

module.exports = Timer;