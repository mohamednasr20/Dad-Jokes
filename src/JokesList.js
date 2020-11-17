import React, { Component } from 'react';
import axios from 'axios';
import './JokeList.css';
import Joke from './Joke';
import { v4 as uuidv4 } from 'uuid';

class JokesList extends Component {
	static defaultProps = {
		numJokes: 10
	};

	constructor(props) {
		super(props);
		this.state = { jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]') };
		this.handleCLick = this.handleCLick.bind(this);
	}

	componentDidMount() {
		if (this.state.jokes.length === 0) this.getJokes();
	}

	async getJokes() {
		let jokes = [];

		while (jokes.length < this.props.numJokes) {
			let res = await axios.get('https://icanhazdadjoke.com/', {
				headers: { Accept: 'application/json' }
			});
			const joke = res.data.joke;
			jokes.push({ id: uuidv4(), text: joke, votes: 0 });
		}

		this.setState((st) => ({ jokes: [ ...st.jokes, ...jokes ] }));
		window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
	}

	handleVote(id, delta) {
		this.setState(
			(st) => ({ jokes: st.jokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j)) }),
			() => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
		);
	}

	handleCLick() {
		this.getJokes();
	}

	render() {
		return (
			<div className="JokeList">
				<div className="JokeList-sidebar">
					<h1 className="JokeList-title">
						<span>Dad</span> Jokes
					</h1>
					<img src="https://www.clipartkey.com/mpngs/m/10-102910_laugh-vector-laughing-emoji-iphone-png.png" />
					<button className="JokeList-getmore" onClick={this.handleCLick}>
						New Jokes
					</button>
				</div>

				<div className="JokeList-jokes">
					{this.state.jokes.map((j) => (
						<Joke
							key={j.id}
							text={j.text}
							votes={j.votes}
							upVotes={() => {
								this.handleVote(j.id, 1);
							}}
							downVotes={() => {
								this.handleVote(j.id, -1);
							}}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default JokesList;
