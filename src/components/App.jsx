import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import 'es6-promise'
import FilmList from './FilmList';
import logo from './logo.png';
import PeopleList from './PeopleList'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            hasLoaded: null,
            people: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(person => this.setState({people: person}))
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(film => this.setState({films: film}))
     
    }

    handleAddFilms = () => {
        this.setState({hasLoaded: this.state.films})
    }   

    handleAddPeople = () => {
        this.setState({hasLoaded: this.state.people})
    }  
    
    render() {
        if (this.state.hasLoaded === this.state.films) {
            return (  
                <FilmList films={this.state.films} />

        )} else if 
            (this.state.hasLoaded === this.state.people) {
            return(
                <div>
                    <PeopleList people={this.state.people} />
                </div>
        )} else {
                return (
                <Fragment>    
                    <img src={logo} alt=""/>
                    <button onClick = {this.handleAddFilms}>Load Films</button>
                    <button onClick = {this.handleAddPeople}>Load People</button>
                </Fragment>
                 )}
             }
}


export default App;