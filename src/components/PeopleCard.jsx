import React, { Component } from 'react';

class Peoplecard extends Component {
    render() { 
        return (
            <div className="card" key={this.props.people.id}>
                <div className="card-block">
                    <h4 className="card-title">Name: { this.props.people.name }</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Age:{this.props.people.age }</h6>
                    <p className="card-text">Gender: { this.props.people.gender }</p>
                    <a className="card-text" target='_blank' href={this.props.people.species}> Species</a>
                </div>
            </div>
        );
    }
}
    
export default Peoplecard;
