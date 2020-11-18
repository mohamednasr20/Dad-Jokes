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
		this.state = { jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'), loading: false };
		this.handleCLick = this.handleCLick.bind(this);
		this.seenJokes = new Set(this.state.jokes.map((j) => j.text));
	}

	componentDidMount() {
		if (this.state.jokes.length === 0) this.getJokes();
	}

	async getJokes() {
		try {
			let jokes = [];

			while (jokes.length < this.props.numJokes) {
				let res = await axios.get('https://icanhazdadjoke.com/', {
					headers: { Accept: 'application/json' }
				});
				const newJoke = res.data.joke;
				if (!this.seenJokes.has(newJoke)) {
					jokes.push({ id: uuidv4(), text: newJoke, votes: 0 });
				}
			}

			this.setState((st) => ({ jokes: [ ...st.jokes, ...jokes ], loading: false }));
			window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
		} catch (e) {
			alert(e);
			this.setState({ loading: false });
		}
	}

	handleVote(id, delta) {
		this.setState(
			(st) => ({ jokes: st.jokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j)) }),
			() => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
		);
	}

	handleCLick() {
		this.setState({ loading: true });
		this.getJokes();
	}

	render() {
		if (this.state.loading) {
			return (
				<div className="JokeList-spinner">
					<i className="far fa-8x fa-laugh fa-spin" />
					<h1 className="JokeList-title">Loading...</h1>
				</div>
			);
		}

		let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
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
					{jokes.map((j) => (
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
