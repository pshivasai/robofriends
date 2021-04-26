import React from 'react';


class AddMe extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			enteruser: ''
    	}
    }

   

	onUserEnter = (event) => {
		this.setState({enteruser: event.target.value})
	}


	onSubmitUser = () => {
		if (this.state.enteruser.length > 0){
				fetch('https://desolate-sea-04900.herokuapp.com/addme', {
				method: 'post',
				headers : {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: this.state.enteruser
				})
				}).then(res => res.text())
				.then(data => {
					if (data === 'success') {
						window.location.reload()
					}
			  })
			} else {
				alert('enter name')
			}
	}

	render() {
		return(
			<div>
				<input id="name" 
				onChange={this.onUserEnter}
				className='pa3 ma2 ba b--green bg-lightest-blue'
				type="text"
				placeholder='enter your name'
				/>
				<button
				onClick={this.onSubmitUser}
				className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green"
				>
				Add
				</button>
			</div>
		);
	}
}

export default AddMe;