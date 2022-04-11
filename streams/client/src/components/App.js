import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////

// Instead of BrowserRouter, you can also use the HashRouter. It puts a hash(#) symbol between the slashes(/). In this case the requests are always made to (in this case) localhost:3000 and then looks to find what is after the #. It doesn't require special configuration by the backend server.
// import { HashRouter, Route, Link } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////

// You can also use the MemoryRouter. It doesn't update the URL. 
// import { MemoryRouter, Route, Link } from "react-router-dom";

///////////////////////////////////////////////////////////////////////////////////

const PageOne = () => {
    return (
        <div>
            Page One
            <Link to="/pagetwo">Navigate to page 2</Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            Page Two
            <Link to="/">Navigate to page 1</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
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
