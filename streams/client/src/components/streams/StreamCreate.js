import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);

// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import { createStream } from "../../actions";

// class StreamCreate extends React.Component {
//     renderError(/*meta*/ { error, touched }) {
//         if (touched && error) {
//             return (
//                 <div className="ui error message">
//                     <div className="header">{error}</div>
//                 </div>
//             );
//         }
//     }

//     //renderInput(formProps) {
//     renderInput = ({ input, label, meta }) => {
//         //console.log(formProps); form props coming from redux-form
//         // console.log(meta);
//         const className = `field ${meta.error && meta.touched ? "error" : ""}`;
//         return (
//             // <input
//             //     onChange={formProps.input.onChange}
//             //     value={formProps.input.value}
//             // />

//             // better way of writting the code above
//             // <input {...formProps.input} />

//             // code above destructuring formProps
//             <div className={className}>
//                 <label>{label}</label>
//                 <input {...input} autoComplete="off" />
//                 {/* <div>{meta.error}</div> line below is the reformated code */}
//                 {this.renderError(meta)}
//             </div>
//         );
//     };

//     onSubmit = (formValues) => {
//         //console.log(formValues);
//         this.props.createStream(formValues);
//     };

//     render() {
//         // console.log(this.props); -> props coming from redux-form
//         return (
//             <form
//                 onSubmit={this.props.handleSubmit(this.onSubmit)}
//                 className="ui form error"
//             >
//                 <Field
//                     name="title"
//                     component={this.renderInput}
//                     label="Enter Title"
//                 />
//                 <Field
//                     name="description"
//                     component={this.renderInput}
//                     label="Enter Description"
//                 />
//                 <button className="ui button primary">Submit</button>
//             </form>
//         );
//     }
// }

// const validate = (formValues) => {
//     const errors = {};

//     if (!formValues.title) {
//         errors.title = "You must enter a title";
//     }

//     if (!formValues.description) {
//         errors.description = "You must enter a description";
//     }

//     return errors;
// };

// const formWrapped = reduxForm({
//     form: "streamCreate",
//     validate,
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);
