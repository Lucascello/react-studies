import React from "react";
import Header from "./Header";

const App = () => {
    return (
        <>
            <div className="title">
                <h1 className="pt">Praise Team Sunday Service Participation</h1>
            </div>
            <table class="ui selectable celled table">
                <Header />
                <tbody>
                    <tr>
                        <td>Lucas</td>
                        <td>No Action</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Mathias</td>
                        <td>Approved</td>
                        <td>Requires call</td>
                    </tr>
                    <tr>
                        <td>Kenya</td>
                        <td>Denied</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Vilma</td>
                        <td>No Action</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Charity</td>
                        <td class="positive">Approved</td>
                        <td class="warning">Requires call</td>
                    </tr>
                    <tr>
                        <td>Filipe</td>
                        <td class="negative">Denied</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Andrei</td>
                        <td class="negative">Denied</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Danilo</td>
                        <td class="negative">Denied</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Debora</td>
                        <td class="negative">Denied</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Erika</td>
                        <td class="negative">Denied</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Foster</td>
                        <td class="negative">Denied</td>
                        <td>None</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default App;
