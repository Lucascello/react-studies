import React from "react";
import { /*BrowserRouter*/ Router, Route } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";

////////////////////////////////////////////////////////////////////////////////////

// Instead of BrowserRouter, you can also use the HashRouter. It puts a hash(#) symbol between the slashes(/). In this case the requests are always made to (in this case) localhost:3000 and then looks to find what is after the #. It doesn't require special configuration by the backend server.
// import { HashRouter, Route, Link } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////

// You can also use the MemoryRouter. It doesn't update the URL.
// import { MemoryRouter, Route, Link } from "react-router-dom";

///////////////////////////////////////////////////////////////////////////////////

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route
                        path="/streams/delete"
                        exact
                        component={StreamDelete}
                    />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </Router>
        </div>
    );
};

// const App = () => {
//     return (
//         <div>
//             <HashRouter>
//                 <div>
//                     <Route path="/" exact component={PageOne} />
//                     <Route path="/pagetwo" component={PageTwo} />
//                 </div>
//             </HashRouter>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <MemoryRouter>
//                 <div>
//                     <Route path="/" exact component={PageOne} />
//                     <Route path="/pagetwo" component={PageTwo} />
//                 </div>
//             </MemoryRouter>
//         </div>
//     );
// };

export default App;
