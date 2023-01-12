import React from "react";
import './App.css';
import styles from "./styles";

class Result extends React.Component {
    render() {
        return (
            <h1 style={styles.textStyle(this.props.counter)}>Result: {this.props.counter}</h1>
        )
    }
}

class Click extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}

// LIFTING STATE UP

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onDecrease = this.onDecrease.bind(this);
        this.onIncrease = this.onIncrease.bind(this);
    }

    state = {
        counter: 1
    }

    onIncrease() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    onDecrease() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <Result counter={this.state.counter} />
                <br />
                <Click text={"+"} onClick={this.onIncrease} />
                <Click text={"-"} onClick={this.onDecrease} />
            </div>
        )
    }
}


export default App;
