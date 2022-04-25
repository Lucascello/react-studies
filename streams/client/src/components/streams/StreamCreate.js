import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
    //renderInput(formProps) {
    renderInput({ input, label }) {
        //console.log(formProps); form props coming from redux-form
        return (
            // <input
            //     onChange={formProps.input.onChange}
            //     value={formProps.input.value}
            // />

            // better way of writting the code above
            // <input {...formProps.input} />

            // code above destructuring formProps
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    render() {
        // console.log(this.props); -> props coming from redux-form
        return (
            <form className="ui form">
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Enter Title"
                />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter Description"
                />
            </form>
        );
    }
}

export default reduxForm({
    form: "streamCreate",
})(StreamCreate);
