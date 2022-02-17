import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log("position :)", position),
//         (err) => console.log(err)
//     );
//     return <div>Hi There!</div>;
// };

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { latitude: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }

    render() {
        return <div>Latitude: {this.state.latitude} </div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
