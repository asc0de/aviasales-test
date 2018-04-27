import React, { Component } from "react";
import "./button.component.css";

class Button extends Component {
    render() {
        return (
            <button type="button" className={"at-primary-button"} {...this.props}>
                {this.props.value}
            </button>
        );
    }
}

export default Button;
