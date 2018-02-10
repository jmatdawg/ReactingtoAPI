import React, { Component } from 'react';
import Filmcard from './Filmcard';

class FilmList extends Component {
    render() {
        const filmCards = this.props.films.map((film) => {
            return(
                <div key={film.id}>  {/* this line fixes the key error. use film because thats what is passed in */}
                    <Filmcard film = {film} />
                </div>
            ) 
        });
        return (
            <div>{ filmCards }</div>
        );
    }
}

export default FilmList;