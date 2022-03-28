import React from 'react';
import loading from "./loader.gif";

const Loader = () => {
    return (
        <div className='text-center'>
            <img src={loading} alt="Loading......."></img>
        </div>
    );
}

export default Loader;



// import React, { Component } from 'react';
// import loading from "./loader.gif";

// export class Loader extends Component {
//   render() {
//     return (
//         <div className='text-center'>
//             <img src={loading} alt="Loading......."></img>
//         </div>
//     );
//   }
// }

// export default Loader;
