var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">React Timer</li>
					<li><IndexLink activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/">Timer</IndexLink></li>
					<li><IndexLink activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/">Countdown</IndexLink></li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text"> Created by <a href="https://github.com/jonathanwmaddison" target="_blank">Jonathan Maddison</a></li>
				</ul>
			</div>
		</div>
	)
}



module.exports = Nav;