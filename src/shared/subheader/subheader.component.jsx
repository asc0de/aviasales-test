import React, { Component } from 'react';
import './subheader.component.css';

class Subheader extends Component {
    render() {
        return (<h4 className='at-subheader'>{this.props.children}</h4>)
    }
}

export default Subheader;
 
