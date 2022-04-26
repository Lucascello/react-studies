import React from "react";
import Choices from "./Choices";

const Body = () => {
    // const className = () => {
    //     if
    // }

    return (
        <tbody>
            <tr>
                <td>Lucas</td>
                <Choices />
            </tr>
            <tr>
                <td>Mathias</td>
                <Choices />
            </tr>
            <tr>
                <td>Kenya</td>
                <Choices />
            </tr>
            <tr>
                <td>Vilma</td>
                <Choices />
            </tr>
            {/* <tr>
                <td>Charity</td>
                <td class="positive">Approved</td>
                <td class="warning">Requires call</td>
            </tr> */}
            <tr>
                <td>Charity</td>
                <Choices />
            </tr>
            {/* <tr>
                <td>Filipe</td>
                <td class="negative">Denied</td>
                <td>None</td>
            </tr> */}
            <tr>
                <td>Filipe</td>
                <Choices />
            </tr>
            <tr>
                <td>Andrei</td>
                <Choices />
            </tr>
            <tr>
                <td>Danilo</td>
                <Choices />
            </tr>
            <tr>
                <td>Debora</td>
                <Choices />
            </tr>
            <tr>
                <td>Erika</td>
                <Choices />
            </tr>
            <tr>
                <td>Foster</td>
                <Choices />
            </tr>
        </tbody>
    );
};

export default Body;
