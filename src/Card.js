import React, { Component } from 'react';
import footballPic from './football.jpg';

class Card extends Component {
    render() {
        return (
            <div>
                <img alt='item' src={footballPic} />
                <div>
                    <h2>Example Item #1</h2>
                    <p>$99,999</p>
                </div>
            </div>
        );
    }
}

export default Card;