import React from "react";

const Inactive = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr className="warning">
                    <td className="name leave">Stefanie</td>
                    <td className="name leave">Inactive</td>
                    <td className="name leave">Parental Leave</td>
                </tr>
                <tr className="warning">
                    <td className="name leave">Ana Carolina</td>
                    <td className="name leave">Inactive</td>
                    <td className="name leave">Parental Leave</td>
                </tr>
                <tr className="warning">
                    <td className="name leave">Jia</td>
                    <td className="name leave">Inactive</td>
                    <td className="name leave">Parental Leave</td>
                </tr>
                <tr className="negative">
                    <td className="name unknown">Jieun</td>
                    <td className="name unknown">Inactive</td>
                    <td className="name unknown">Unknown</td>
                </tr>
                <tr className="negative">
                    <td className="name unknown">Kirsten</td>
                    <td className="name unknown">Inactive</td>
                    <td className="name unknown">Unknown</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Inactive;
