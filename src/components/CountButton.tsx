import React from "react";

interface IState {
    count: number;
};

class CountButton extends React.Component<{}, IState> {
    constructor(props: any ) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick() {
        this.setState((state, props) => {
            return {
                count: state.count + 1
            };
        });
    };

    render() {
        return <button onClick = {this.handleClick.bind(this)}>{this.state.count}</button>;
    }
}

export default CountButton;