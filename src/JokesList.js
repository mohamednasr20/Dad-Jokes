import React, { Component } from 'react';
import axios from 'axios';
import './JokeList.css';

class JokesList extends Component {
	static defaultProps = {
		numJokes: 10
	};

	constructor(props) {
		super(props);
		this.state = { jokes: [] };
	}

	async componentDidMount() {
		let jokes = [];

		while (jokes.length < this.props.numJokes) {
			let res = await axios.get('https://icanhazdadjoke.com/', {
				headers: { Accept: 'application/json' }
			});
			jokes.push(res.data.joke);
		}

		this.setState({ jokes: jokes });
	}

	render() {
		return (
			<div className="JokeList">
				<div className="JokeList-sidebar">
					<h1 className="JokeList-title">
						<span>Dad</span> Jokes
					</h1>
					<img src="https://www.clipartkey.com/mpngs/m/10-102910_laugh-vector-laughing-emoji-iphone-png.png" />
					<button className="JokeList-getmore">New Jokes</button>
				</div>

				<div className="JokeList-jokes">{this.state.jokes.map((j) => <div>{j}</div>)}</div>
			</div>
		);
	}
}

export default JokesList;
