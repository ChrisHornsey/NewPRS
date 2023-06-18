import React from "react";

export class LogInBox extends React.Component {

render() {

    return (
        <div className="LogInBox">
            <input placeholder="UserName"/>
            <input placeholder="Password"/>
            <button>Log in</button>
        </div>
    )
    }

}