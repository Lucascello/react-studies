import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "266396411988-kbb12buq51muo2j0nucfsr0qd3eb0066.apps.googleusercontent.com",
                    scope: "email",
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>Maybe you're not signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>You're signed in</div>;
        } else {
            return <div>You're not signed in</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
