import React, { Component }from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';
import AddMe from '../components/AddMe';



class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://desolate-sea-04900.herokuapp.com/')
		.then(res => res.json())
		.then(users => {this.setState({ robots : users })})
	}


	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (this.state.robots.lenght === 0) {
			return <h1>Loading</h1>
		} else {
			return(
					<div className='tc'>
					<h1 className='f2'>Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<AddMe />
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
					</div>
				);
		}
	}
}

export default App;