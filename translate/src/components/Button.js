import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
    renderSubmit(language) {
        return language === "english" ? "Subtit" : "Voorleggen";
    }
    render() {
        return (
            <ColorContext.Consumer>
                {(color) => (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {({ language }) => this.renderSubmit(language)}
                        </LanguageContext.Consumer>
                    </button>
                )}
            </ColorContext.Consumer>
        );
    }
}

///////// The code below is the same as static contextType = LanguageContext; ///////
//Button.contextType = LanguageContext;

export default Button;
