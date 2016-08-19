'use strict';

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			name: '',
			email: '',
			subject: '',
			message: '',
			errorMsg: null,
			acceptMsg: null
		};
	},
	onNameChange: function onNameChange(value) {
		this.setState({ name: value });
	},
	onEmailChange: function onEmailChange(value) {
		this.setState({ email: value });
	},
	onSubjectChange: function onSubjectChange(value) {
		this.setState({ subject: value });
	},
	onMessageChange: function onMessageChange(value) {
		this.setState({ message: value });
	},
	handleSubmit: function handleSubmit() {
		if (this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '' || this.state.email.indexOf("@") === -1) {
			this.setState({
				errorMsg: "Oops! Please fill out all of the information.",
				acceptMsg: null
			});
		} else {
			var contact = {
				fullName: this.state.name,
				email: this.state.email,
				subject: this.state.subject,
				message: this.state.message
			};

			$.post("/contact", contact);
			this.setState({
				errorMsg: null,
				acceptMsg: "Thanks for your message! We will contact you soon.",
				name: '',
				email: '',
				subject: '',
				message: ''
			});
		}
	},
	closeMsg: function closeMsg() {
		this.setState({
			errorMsg: null,
			acceptMsg: null
		});
	},
	render: function render() {
		var _this = this;

		return React.createElement(
			'div',
			null,
			React.createElement(Msg, {
				errorMsg: this.state.errorMsg,
				acceptMsg: this.state.acceptMsg,
				closeMsg: function closeMsg() {
					return _this.closeMsg();
				} }),
			React.createElement(ContactForm, {
				state: this.state,
				onNameChange: this.onNameChange,
				onEmailChange: this.onEmailChange,
				onSubjectChange: this.onSubjectChange,
				onMessageChange: this.onMessageChange,
				handleSubmit: function handleSubmit() {
					return _this.handleSubmit();
				} })
		);
	}
});

var ContactForm = React.createClass({
	displayName: 'ContactForm',

	onNameChange: function onNameChange(e) {
		this.props.onNameChange(e.target.value);
	},
	onEmailChange: function onEmailChange(e) {
		this.props.onEmailChange(e.target.value);
	},
	onSubjectChange: function onSubjectChange(e) {
		this.props.onSubjectChange(e.target.value);
	},
	onMessageChange: function onMessageChange(e) {
		this.props.onMessageChange(e.target.value);
	},
	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		this.props.handleSubmit();
	},
	render: function render() {
		return React.createElement(
			'form',
			{ role: 'form', onSubmit: this.handleSubmit },
			React.createElement(
				'div',
				{ className: 'form-group' },
				React.createElement(
					'label',
					{ 'for': 'fullName' },
					'Full Name:'
				),
				React.createElement('input', {
					className: 'form-control',
					type: 'text',
					autoComplete: 'off',
					name: 'fullName',
					value: this.props.state.name,
					onChange: this.onNameChange })
			),
			React.createElement(
				'div',
				{ className: 'form-group' },
				React.createElement(
					'label',
					{ 'for': 'email' },
					'Email:'
				),
				React.createElement('input', {
					className: 'form-control',
					type: 'text',
					autoComplete: 'off',
					name: 'email',
					value: this.props.state.email,
					onChange: this.onEmailChange })
			),
			React.createElement(
				'div',
				{ className: 'form-group' },
				React.createElement(
					'label',
					{ 'for': 'subject' },
					'Subject:'
				),
				React.createElement('input', {
					className: 'form-control',
					type: 'text',
					autoComplete: 'off',
					name: 'subject',
					value: this.props.state.subject,
					onChange: this.onSubjectChange })
			),
			React.createElement(
				'div',
				{ className: 'form-group' },
				React.createElement(
					'label',
					{ 'for': 'message' },
					'Message:'
				),
				React.createElement('textarea', {
					className: 'form-control',
					type: 'text',
					autoComplete: 'off',
					name: 'message',
					rows: '5',
					value: this.props.state.message,
					onChange: this.onMessageChange })
			),
			React.createElement(
				'button',
				{ className: 'btn btn-default', type: 'submit' },
				'Submit'
			)
		);
	}
});

var Msg = React.createClass({
	displayName: 'Msg',

	render: function render() {
		if (this.props.errorMsg) {
			return React.createElement(
				'div',
				{ className: 'alert alert-danger col-xs-12' },
				React.createElement('span', {
					className: 'glyphicon glyphicon-remove delete-btn',
					onClick: this.props.closeMsg }),
				this.props.errorMsg
			);
		} else if (this.props.acceptMsg) {
			return React.createElement(
				'div',
				{ className: 'alert alert-success col-xs-12' },
				React.createElement('span', {
					className: 'glyphicon glyphicon-remove delete-btn',
					onClick: this.props.closeMsg }),
				this.props.acceptMsg
			);
		} else return React.createElement('div', null);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('react-contact'));