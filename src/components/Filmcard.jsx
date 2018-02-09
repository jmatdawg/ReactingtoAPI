import React, { Component } from 'react';

class Filmcard extends Component {

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
    return(
        <div>
            { card }
        </div>
    );
}
}
    
export default Filmcard;

