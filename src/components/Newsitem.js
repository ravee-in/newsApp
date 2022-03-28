import React from 'react';

const Newsitem = (props) => {
    let { title, description, imgsrc, newsurl, author, publishDate } = props;

    return (
        <div className='col-md-3 mb-3'>
            <div className="card">
                <img src={imgsrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><a href={newsurl} target="_blank" rel="noreferrer">{title}</a></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "NA"} on {new Date(publishDate).toGMTString()}</small></p>
                    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default Newsitem;


// import React, { Component } from 'react';

// export class Newsitem extends Component {
//     render() {
//         let { title, description, imgsrc, newsurl, author, publishDate } = this.props;

//         return (
//             <div className='col-md-3 mb-3'>
//                 <div className="card">
//                     <img src={imgsrc} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title"><a href={newsurl} target="_blank" rel="noreferrer">{title}</a></h5>
//                         <p className="card-text">{description}</p>
//                         <p className="card-text"><small className="text-muted">By {author ? author : "NA"} on {new Date(publishDate).toGMTString()}</small></p>
//                         <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Newsitem;
