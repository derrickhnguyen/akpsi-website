"use strict";

var App = React.createClass({
	displayName: "App",

	getInitialState: function getInitialState() {
		return {
			email: '',
			errMsg: null,
			acceptedMsg: null
		};
	},
	onChange: function onChange(value) {
		this.setState({ email: value });
	},
	closeMsg: function closeMsg() {
		this.setState({
			errMsg: null,
			acceptedMsg: null
		});
	},
	addEmail: function addEmail() {
		if (this.state.email.indexOf("@") === -1) {
			this.setState({
				errMsg: "Oops! Please enter a valid email.",
				acceptedMsg: null
			});
		} else {
			$.post("/recruitment", { email: this.state.email });
			this.setState({
				email: '',
				errMsg: null,
				acceptedMsg: "You have been added to our mailing list!"
			});
		}
	},
	render: function render() {
		var _this = this;

		return React.createElement(
			"div",
			{ className: "row text-center" },
			React.createElement(
				"div",
				{ className: "col-xs-10 col-xs-offset-1 col-md-12 col-md-offset-0 top-bot-space-sm" },
				React.createElement(
					"h4",
					null,
					React.createElement(
						"strong",
						null,
						"Applications for Fall 2016 Recruitment are coming soon"
					)
				),
				React.createElement(
					"p",
					null,
					React.createElement(
						"i",
						null,
						"Sign up for our mailing list! We'll keep you updated!"
					)
				),
				React.createElement(Msg, { closeMsg: function closeMsg() {
						return _this.closeMsg();
					}, errMsg: this.state.errMsg, acceptedMsg: this.state.acceptedMsg }),
				React.createElement(EmailInput, { email: this.state.email, onChange: this.onChange, addEmail: this.addEmail })
			)
		);
	}
});
var EmailInput = React.createClass({
	displayName: "EmailInput",

	handleChange: function handleChange(e) {
		this.props.onChange(e.target.value);
	},
	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		this.props.addEmail();
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "col-xs-12" },
			React.createElement(
				"form",
				{ onSubmit: this.handleSubmit },
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement("input", {
						className: "form-control newsletter-email",
						type: "text",
						autoComplete: "off",
						value: this.props.email,
						onChange: this.handleChange,
						placeholder: "Enter your email here" })
				),
				React.createElement(
					"button",
					{ className: "btn btn-default", type: "submit" },
					"Submit"
				)
			)
		);
	}
});
var Msg = React.createClass({
	displayName: "Msg",

	render: function render() {
		if (this.props.errMsg) {
			return React.createElement(
				"div",
				{ className: "alert alert-danger col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" },
				React.createElement("span", {
					className: "glyphicon glyphicon-remove delete-btn",
					onClick: this.props.closeMsg }),
				this.props.errMsg
			);
		} else if (this.props.acceptedMsg) {
			return React.createElement(
				"div",
				{ className: "alert alert-success col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" },
				React.createElement("span", {
					className: "glyphicon glyphicon-remove delete-btn",
					onClick: this.props.closeMsg }),
				this.props.acceptedMsg
			);
		} else return React.createElement("div", null);
	}
});
ReactDOM.render(React.createElement(App, null), document.getElementById('react-recruitment'));