import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class PostsNew extends Component {
	render() {
		return (
			<Form>
				PostsNew!
			</Form>
		);	
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew) ;
