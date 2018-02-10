import React, { Component } from 'react';

class Filmcard extends Component {
    render() {    
        return (
            <div className="card" key={this.props.film.id}>
                <div className="card-block">
                    <h4 className="card-title">Title: { this.props.film.title }</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Release Date: { this.props.film.release_date }</h6>
                    <p className="card-text">Desrciption: { this.props.film.description }</p>
                </div>
            </div>
        );
    }
}
    
export default Filmcard;

