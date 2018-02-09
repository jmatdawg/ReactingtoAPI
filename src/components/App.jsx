import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise'
import Filmcard from './Filmcard';
// import Filmcard from './Filmcard';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(film => this.setState({films: film}))
}
  
    render() {
        let card = this.state.films.map((item) => {
            return ( 
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">{ item.title }</h4>
                        <p className="card-text">{ item.description }</p>
                    </div>
                </div>
                );
            })
       return (  
        <div>
            { card }
        </div>      
      );
  }
}

export default App;