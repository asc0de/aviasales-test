import React, { Component } from "react";
import TicketsPage from "./tickets-page/tickets-page.container";
import "./app.css";

class App extends Component {
    render() {
        return (
            <div className={"at-app"}>
                <TicketsPage />
            </div>
        );
    }
}

export default App;
