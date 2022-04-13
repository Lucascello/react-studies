import React from "react";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
    // static contextType = LanguageContext;

    render() {
        // const text = this.context === "english" ? "Submit" : "Voorleggen";

        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => (value === "english" ? "Submit" : "Voorleggen")}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

///////// The code below is the same as static contextType = LanguageContext; ///////
//Button.contextType = LanguageContext;

export default Button;
