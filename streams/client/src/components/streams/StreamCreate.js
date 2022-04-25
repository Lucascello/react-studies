import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
    render() {
        // console.log(this.props); -> props coming from redux-form
        return (
            <form>
                <Field name="title"/>
                <Field name="description"/>
            </form>
        );
    }
}

export default reduxForm({
    form: "streamCreate",
})(StreamCreate);
