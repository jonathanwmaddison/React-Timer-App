var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');


describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});
	describe('setCountdown', () => {
		it('should count', (done) =>{ //done allows you to run asynch tests with expect and mocha
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleStatusChange('started');

			setTimeout(()=> {
				expect(timer.state.count).toBe(2);
				done(); //done allows you to run asynchronous tests
			}, 2001)
		});
		it('Should pause timer on paused status', (done) =>{ //done allows you to run asynch tests with expect and mocha
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.state.count = 3;
			timer.handleStatusChange('paused');
			setTimeout(()=> {
				expect(timer.state.count).toBe(3);
				expect(timer.state.countdownStatus).toBe('paused')
				done(); //done allows you to run asynchronous tests
			}, 1001)
		});
		it('Should stop and reset timer when stopped', (done) =>{ //done allows you to run asynch tests with expect and mocha
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.state.count = 3;
			timer.handleStatusChange('stopped');
			setTimeout(()=> {
				expect(timer.state.count).toBe(0);
				expect(timer.state.countdownStatus).toBe('paused')
				done(); //done allows you to run asynchronous tests
			}, 1001)
		});
	});
});