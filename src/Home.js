import './Home.css';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
        <div className="tc f2">
            <h1>Hello {this.props.greeting}</h1>
            <p>This is my first react project</p>
        </div>
        );
    } 
}

export default Home;
