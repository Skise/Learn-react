import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from "./ClickCounter.js";

// ReactDOM.render(
//     <ClickCounter />,
//     document.getElementById('root')
// );

// function Welcome(props) {
//     return <h1>Hello, { props.name }</h1>
// } 

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is { new Date().toLocaleTimeString() }.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);

//使用类方法构造
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            data: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is { this.state.data.toLocaleTimeString() }.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);