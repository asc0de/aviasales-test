import React, { Component } from "react";
import Subheader from "../../../shared/subheader/subheader.component";
import Checkbox from "../../../shared/checkbox/checkbox.component";
import "./transfer-filter.component.css";

class TransferFilter extends Component {
    onCheckboxChange(e) {
        const checkboxValue = parseInt(e.target.value, 10);
        if (checkboxValue === -1) {
            this.props.setAllTransfers(e.target.checked);
            return;
        }
        if (checkboxValue === 0) {
            this.props.setNoTransfers(e.target.checked);
            return;
        }
        this.props.setTransfer(checkboxValue, e.target.checked);
    }
    render() {
        return (
            <div className={"at-transfer-filter-container"}>
                <Subheader>Количество пересадок</Subheader>
                <ul>
                    <li>
                        <Checkbox
                            value={-1}
                            onChange={this.onCheckboxChange.bind(this)}
                            label={"Все"}
                        />
                    </li>
                    <li>
                        <Checkbox
                            value={0}
                            onChange={this.onCheckboxChange.bind(this)}
                            label={"Без пересадок"}
                        />
                    </li>
                    <li>
                        <Checkbox
                            value={1}
                            onChange={this.onCheckboxChange.bind(this)}
                            label={"1 пересадка"}
                        />
                    </li>
                    <li>
                        <Checkbox
                            value={2}
                            onChange={this.onCheckboxChange.bind(this)}
                            label={"2 пересадки"}
                        />
                    </li>
                    <li>
                        <Checkbox
                            value={3}
                            onChange={this.onCheckboxChange.bind(this)}
                            label={"3 пересадки"}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

export default TransferFilter;
