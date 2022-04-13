import React from "react";

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId:
                    "266396411988-kbb12buq51muo2j0nucfsr0qd3eb0066.apps.googleusercontent.com",
                scope: "email",
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;
