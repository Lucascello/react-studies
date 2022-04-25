import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
    renderInput(formProps) {
        //console.log(formProps); form props coming from redux-form
        return (
            // <input
            //     onChange={formProps.input.onChange}
            //     value={formProps.input.value}
            // />
            // better way of writting the code above

            <input {...formProps.input} />
        );
    }

    render() {
        // console.log(this.props); -> props coming from redux-form
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    form: "streamCreate",
})(StreamCreate);
