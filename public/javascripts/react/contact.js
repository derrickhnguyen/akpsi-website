const App = React.createClass({
	getInitialState: function() {
		return {
			name: '',
			email: '',
			subject: '',
			message: '',
			errorMsg: null,
			acceptMsg: null
		};
	},
	onNameChange: function(value) {
		this.setState({name: value});
	},
	onEmailChange: function(value) {
		this.setState({email: value});
	},
	onSubjectChange: function(value) {
		this.setState({subject: value});
	},
	onMessageChange: function(value) {
		this.setState({message: value});
	},
	handleSubmit: function() {
		if(this.state.name === ''
			|| this.state.email === ''
			|| this.state.subject === ''
			|| this.state.message === ''
			|| this.state.email.indexOf("@") === -1) {
			this.setState({
				errorMsg: "Oops! Please fill out all of the information.",
				acceptMsg: null, 
			});
		} else {
			const contact = {
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
	closeMsg: function() {
		this.setState({
			errorMsg: null,
			acceptMsg: null
		});
	},
	render: function() {
		return (
			<div>
				<Msg 
					errorMsg={this.state.errorMsg} 
					acceptMsg={this.state.acceptMsg}
					closeMsg={() => this.closeMsg()} />
				<ContactForm 
					state={this.state}
					onNameChange={this.onNameChange}
					onEmailChange={this.onEmailChange}
					onSubjectChange={this.onSubjectChange}
					onMessageChange={this.onMessageChange}
					handleSubmit={() => this.handleSubmit()} />
			</div>
		);
	}
});

const ContactForm = React.createClass({
	onNameChange: function(e) {
		this.props.onNameChange(e.target.value);
	},
	onEmailChange: function(e) {
		this.props.onEmailChange(e.target.value);
	},
	onSubjectChange: function(e) {
		this.props.onSubjectChange(e.target.value);
	},
	onMessageChange: function(e) {
		this.props.onMessageChange(e.target.value);
	},
	handleSubmit: function(e) {
		e.preventDefault();
		this.props.handleSubmit();
	},
	render: function() {
		return(
			<form role="form" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label for="fullName">Full Name:</label>
					<input 
						className="form-control"
						type="text"
						autoComplete="off"
						name="fullName"
						value={this.props.state.name}
						onChange={this.onNameChange} />
				</div>
				<div className="form-group">
					<label for="email">Email:</label>
					<input 
						className="form-control"
						type="text"
						autoComplete="off"
						name="email" 
						value={this.props.state.email}
						onChange={this.onEmailChange} />
				</div>
				<div className="form-group">
					<label for="subject">Subject:</label>
					<input 
						className="form-control"
						type="text"
						autoComplete="off"
						name="subject"
						value={this.props.state.subject}
						onChange={this.onSubjectChange} />
				</div>
				<div className="form-group">
					<label for="message">Message:</label>
					<textarea 
						className="form-control"
						type="text"
						autoComplete="off"
						name="message"
						rows="5" 
						value={this.props.state.message}
						onChange={this.onMessageChange} />
				</div>
				<button className="btn btn-default" type="submit">Submit</button>
			</form>
		);
	}
});

const Msg = React.createClass({
	render: function() {
		if(this.props.errorMsg) {
			return (
				<div className="alert alert-danger col-xs-12">
					<span 
						className="glyphicon glyphicon-remove delete-btn"
						onClick={this.props.closeMsg}>
					</span>
					{this.props.errorMsg}
				</div>
			);
		} else if(this.props.acceptMsg) {
			return (
				<div className="alert alert-success col-xs-12">
					<span 
						className="glyphicon glyphicon-remove delete-btn"
						onClick={this.props.closeMsg}>
					</span>
					{this.props.acceptMsg}
				</div>
			);
		} else return <div />
	}
})

ReactDOM.render(
	<App />,
	document.getElementById('react-contact')
);