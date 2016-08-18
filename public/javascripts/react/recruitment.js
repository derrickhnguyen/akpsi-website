const App = React.createClass({
	getInitialState: function() {
		return {
			email: '',
			errMsg: null,
			acceptedMsg: null	
		};
	},
	onChange: function(value) {
		this.setState({email: value});
	},
	closeMsg: function() {
		this.setState({
			errMsg: null,
			acceptedMsg: null
		});
	},
	addEmail: function() {
		if(this.state.email.indexOf("@") === -1) {
			this.setState({
				errMsg: "Oops! Please enter a valid email.", 
				acceptedMsg: null
			});
		} else {
			$.post("/recruitment", {email: this.state.email});
			this.setState({
				email: '', 
				errMsg: null, 
				acceptedMsg: "You have been added to our mailing list!"
			});
		}
	},
	render: function() {
		return (
			<div className="row text-center">
				<div className="col-xs-10 col-xs-offset-1 col-md-12 col-md-offset-0 top-bot-space-sm">
					<h4><strong>Applications for Fall 2016 Recruitment are coming soon</strong></h4>
					<p><i>Sign up for our mailing list! We'll keep you updated!</i></p>
					<Msg closeMsg={() => this.closeMsg()} errMsg={this.state.errMsg} acceptedMsg={this.state.acceptedMsg} />
					<EmailInput email={this.state.email} onChange={this.onChange} addEmail={this.addEmail} />
				</div>
			</div>
		);
	}
});

const EmailInput = React.createClass({
	handleChange: function(e) {
		this.props.onChange(e.target.value);
	},
	handleSubmit: function(e) {
		e.preventDefault();
		this.props.addEmail();
	},
	render: function() {
		return (
			<div className="col-xs-12">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input 
							className="form-control newsletter-email" 
							type="text"
							autoComplete="off"
							value = {this.props.email}
							onChange={this.handleChange}
							placeholder="Enter your email here" />
					</div>
					<button className="btn btn-default" type="submit">Submit</button>
				</form>
			</div>
		);
	}
});

const Msg = React.createClass({
	render: function() {
		if(this.props.errMsg) {
			return (
				<div className="alert alert-danger col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<span 
						className="glyphicon glyphicon-remove delete-btn"
						onClick={this.props.closeMsg} >
					</span>
					{this.props.errMsg}
				</div>
			);
		} else if(this.props.acceptedMsg) {
			return (
				<div className="alert alert-success col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<span 
						className="glyphicon glyphicon-remove delete-btn"
						onClick={this.props.closeMsg} >
					</span>
					{this.props.acceptedMsg}
				</div>
			);
		} else return <div />
	}
})

ReactDOM.render(
	<App />,
	document.getElementById('react-recruitment')
);