import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
    //renderInput(formProps) {
    renderInput({ input, label, meta }) {
        //console.log(formProps); form props coming from redux-form
        // console.log(meta);
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
                <div>{meta.error}</div>
            </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        // console.log(this.props); -> props coming from redux-form
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form"
            >
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
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "You must enter a title";
    }

    if (!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors;
};

export default reduxForm({
    form: "streamCreate",
    validate,
})(StreamCreate);
