import React, { Component } from 'react';
import PeopleCard from './PeopleCard';

class PeopleList extends Component {
    render() {
        const personCards = this.props.people.map((people) => {
            return(
                <div> 
                    <PeopleCard people = {people} />
                </div>
            ) 
        });
        return (
            <div>{ personCards }</div>
        );
    }
}

export default PeopleList;