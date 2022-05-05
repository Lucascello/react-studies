import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
    componentDidMount() {
        //console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
    }

    // My Solution to the extra div (See Modal.js for the entire picture)
    // renderActions() {
    //     return (
    //         <div className="actions">
    //         <button className="ui button negative">Delete</button>
    //         <button className="ui button">Cancel</button>
    //     </div>
    //     );
    // }

    renderActions() {
        return (
            // <React.Fragment> same as line below
            <>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </>
            // </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                Stream Delete
                <Modal
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream?"
                    actions={this.renderActions()}
                    onDismiss={() => history.push("/")}
                />
            </div>
        );
    }
}

export default connect(null, { fetchStream })(StreamDelete);
