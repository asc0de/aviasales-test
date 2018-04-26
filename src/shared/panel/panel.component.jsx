import React, { Component } from 'react';
import './panel.component.css';

class Panel extends Component {
    render() { 
        return (
            <div className="at-panel">{this.props.children}</div>
        )
    }
}
 
export default Panel;