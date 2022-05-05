import React from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
    // My Solution to the extra div (See Modal.js for the entire picture)
    // const actions = (
    //     <div className="actions">
    //         <button className="ui button negative">Delete</button>
    //         <button className="ui button">Cancel</button>
    //     </div>
    // );

    const actions = (
        // <React.Fragment> same as line below
        <>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </>
        // </React.Fragment>
    );

    return (
        <div>
            Stream Delete
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
                onDismiss={() => history.push("/")}
            />
        </div>
    );
};

export default StreamDelete;
