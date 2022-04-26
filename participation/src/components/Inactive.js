import React from "react";

const Inactive = () => {
    return (
        <table class="ui celled table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr class="warning">
                    <td>Stefanie</td>
                    <td>Inactive</td>
                    <td>Parental Leave</td>
                </tr>
                <tr class="warning">
                    <td>Ana Carolina</td>
                    <td>Inactive</td>
                    <td>Parental Leave</td>
                </tr>
                <tr class="warning">
                    <td>Jia</td>
                    <td>Inactive</td>
                    <td>Parental Leave</td>
                </tr>
                <tr class="negative">
                    <td>Jieun</td>
                    <td>Inactive</td>
                    <td>Unknown</td>
                </tr>
                <tr class="negative">
                    <td>Kirsten</td>
                    <td>Inactive</td>
                    <td>Unknown</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Inactive;
