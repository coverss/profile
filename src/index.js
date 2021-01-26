import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyInfo() {
    return (
        <div>
            <h1>Hello, it's Tim :) and it's My Portfolio Website</h1>
            <p>Yes that was Hello</p>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))