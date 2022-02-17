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

        this.state = { latitude: null, errorMessage: "" };
    }

    componentDidMount() {
        console.log("My component did mount");
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );

        //  window.navigator.geolocation.getCurrentPosition(
        //      (position) => {
        //          this.setState({ latitude: position.coords.latitude });
        //      },
        //      (err) => {
        //          this.setState({ errorMessage: err.message });
        //      }
        //  );
    }

    // componentDidUpdate() {
    //     console.log("My component did update");
    // }

    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <div>Latitude: {this.state.latitude}</div>;
        }

        return <div>Loading</div>;

        // This code below would show both messages at the same time, giving either Latitude or Error (even while loading the latitude)
        // return (
        //     <div>
        //         Latitude: {this.state.latitude}
        //         <br />
        //         Error :{this.state.errorMessage}
        //     </div>
        // );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
