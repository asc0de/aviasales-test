import React, { Component } from "react";
import "./checkbox.component.css";

class Checkbox extends Component {
    render() {
        return (
            <div className="at-checkbox">
                <label className="at-checkbox-container">
                    {this.props.label}
                    <input type="checkbox" {...this.props} />
                    <span className="at-checkmark" />
                </label>
            </div>
        );
    }
}

export default Checkbox;
