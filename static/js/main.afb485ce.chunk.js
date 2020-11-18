(this["webpackJsonpdad-jokes"]=this["webpackJsonpdad-jokes"]||[]).push([[0],{28:function(e,t,s){},29:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var n=s(0),o=s(2),a=s.n(o),i=s(19),c=s.n(i),r=(s(28),s(3)),l=s(4),u=s(6),h=s(5),j=(s(29),s(10)),p=s(9),d=s.n(p),k=s(22),m=s(20),v=s(7),f=s(21),b=s.n(f),g=(s(48),s(49),function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CAF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB3b":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FF9800":"#f44336"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Joke",children:[Object(n.jsxs)("div",{className:"Joke-buttons",children:[Object(n.jsx)("i",{className:"fas fa-arrow-up",onClick:this.props.upVotes}),Object(n.jsx)("span",{className:"Joke-votes",style:{borderColor:this.getColor()},children:this.props.votes}),Object(n.jsx)("i",{className:"fas fa-arrow-down",onClick:this.props.downVotes})]}),Object(n.jsx)("div",{className:"Joke-text",children:this.props.text}),Object(n.jsx)("div",{className:"Joke-smiley",children:Object(n.jsx)("i",{className:this.getEmoji()})})]})}}]),s}(o.Component)),O=s(52),x=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},n.handleCLick=n.handleCLick.bind(Object(v.a)(n)),n.seenJokes=new Set(n.state.jokes.map((function(e){return e.text}))),n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"getJokes",value:function(){var e=Object(m.a)(d.a.mark((function e(){var t,s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[];case 2:if(!(t.length<this.props.numJokes)){e.next=10;break}return e.next=5,b.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 5:s=e.sent,n=s.data.joke,this.seenJokes.has(n)||t.push({id:Object(O.a)(),text:n,votes:0}),e.next=2;break;case 10:this.setState((function(e){return{jokes:[].concat(Object(k.a)(e.jokes),t),loading:!1}})),window.localStorage.setItem("jokes",JSON.stringify(this.state.jokes)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert(e.t0),this.setState({loading:!1});case 18:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){var s=this;this.setState((function(s){return{jokes:s.jokes.map((function(s){return s.id===e?Object(j.a)(Object(j.a)({},s),{},{votes:s.votes+t}):s}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(s.state.jokes))}))}},{key:"handleCLick",value:function(){this.setState({loading:!0}),this.getJokes()}},{key:"render",value:function(){var e=this;if(this.state.loading)return Object(n.jsxs)("div",{className:"JokeList-spinner",children:[Object(n.jsx)("i",{className:"far fa-8x fa-laugh fa-spin"}),Object(n.jsx)("h1",{className:"JokeList-title",children:"Loading..."})]});var t=this.state.jokes.sort((function(e,t){return t.votes-e.votes}));return Object(n.jsxs)("div",{className:"JokeList",children:[Object(n.jsxs)("div",{className:"JokeList-sidebar",children:[Object(n.jsxs)("h1",{className:"JokeList-title",children:[Object(n.jsx)("span",{children:"Dad"})," Jokes"]}),Object(n.jsx)("img",{src:"https://www.clipartkey.com/mpngs/m/10-102910_laugh-vector-laughing-emoji-iphone-png.png"}),Object(n.jsx)("button",{className:"JokeList-getmore",onClick:this.handleCLick,children:"New Jokes"})]}),Object(n.jsx)("div",{className:"JokeList-jokes",children:t.map((function(t){return Object(n.jsx)(g,{text:t.text,votes:t.votes,upVotes:function(){e.handleVote(t.id,1)},downVotes:function(){e.handleVote(t.id,-1)}},t.id)}))})]})}}]),s}(o.Component);x.defaultProps={numJokes:10};var J=x,y=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(J,{})})}}]),s}(o.Component),C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,53)).then((function(t){var s=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),o(e),a(e),i(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.afb485ce.chunk.js.map