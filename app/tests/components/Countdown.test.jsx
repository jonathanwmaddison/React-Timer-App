var expect = require('expect');
var React = require ('react');
var ReactDOM = require ('react-dom');
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var Countdown = require('Countdown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});
	describe('setCountdown', () => {
		it('should set state to started and countdown', (done) =>{ //done allows you to run asynch tests with expect and mocha
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(()=> {
				expect(countdown.state.count).toBe(9);
				done(); //done allows you to run asynchronous tests
			}, 1001)
		});
		it('Countdown should not go below 0', (done) =>{ //done allows you to run asynch tests with expect and mocha
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(1);

			setTimeout(()=> {
				expect(countdown.state.count).toBe(0);
				done(); //done allows you to run asynchronous tests
			}, 3001)
		});
	});
});