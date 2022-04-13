import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
    // static contextType = LanguageContext;

    render() {
        // const text = this.context === "english" ? "Submit" : "Voorleggen";

        return (
            <ColorContext.Consumer>
                {(color) => (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value) =>
                                value === "english" ? "Submit" : "Voorleggen"
                            }
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
