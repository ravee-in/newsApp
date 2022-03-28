import React, {useEffect, useState} from 'react';
import Loader from './Loader';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = `${props.category===" "?"Home":capitalizeFirstLetter(props.category)} -  MyNewsApp`;
    

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }


      const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${props.category===" "?"Home":capitalizeFirstLetter(props.category)} -  MyNewsApp`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])
    


 
    const fetchMoreData = async () => {
               
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedDAta = await data.json();
        console.log(parsedDAta);
        setArticles(articles.concat(parsedDAta.articles));
        setTotalResults(parsedDAta.totalResults)
        setLoading(false);
      };


        return (
            <div className="mt-5">
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loader />}
                >
                    <div className="container my-5">
                        {loading && <Loader />}

                        <div className="row row-eq-height">

                            {articles.map((element) => {
                                return <Newsitem key={element.url} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 65) : ""} imgsrc={element.urlToImage ? element.urlToImage : "https://picsum.photos/770/433"} newsurl={element.url} author={element.author} publishDate={element.publishedAt} />
                            })}

                        </div>

                        {/* <div className="row">
                        <nav>
                            <ul className="pagination">
                                <li className={`page-item ${this.state.page <= 1 ? 'disabled' : ""}`}><button className="page-link" onClick={this.goToPrev}>Previous</button></li>

                                <li className={`page-item ${this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize) ? 'disabled' : ""}`}><button type='button' className="page-link" onClick={this.goToNext}>Next</button></li>
                            </ul>
                        </nav>
                    </div> */}
                    </div>
                </InfiniteScroll>
            </div>
        );
}


News.defaultProps = {
    country: "in",
    pageSize: 12,
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News;














// import React, { Component } from 'react';
// import Loader from './Loader';
// import Newsitem from './Newsitem';
// import PropTypes from 'prop-types';
// import InfiniteScroll from 'react-infinite-scroll-component';


// export class News extends Component {

//     static defaultProps = {
//         country: "in",
//         pageSize: 12,
//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }
//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//       }
//     constructor(props) {
//         super(props);
//         console.log("Im a constructor of News item");
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults: 0
//         }
//         document.title = `${this.props.category===" "?"Home":this.capitalizeFirstLetter(this.props.category)} -  MyNewsApp`;
//     };



//     async componentDidMount() {
        
//         this.props.setProgress(10);
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true });
//         let data = await fetch(url);        
//         this.props.setProgress(30);
//         let parsedDAta = await data.json();
//         this.props.setProgress(60);
//         console.log(parsedDAta);
//         this.setState({
//             articles: parsedDAta.articles,
//             loading: false

//         });
//         this.props.setProgress(100);

//     }

//     // goToPrev = async () => {
//     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18693128be634912ac37023a462b0c86&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//     //     this.setState({ loading: true });
//     //     let data = await fetch(url);
//     //     let parsedDAta = await data.json();
//     //     console.log(parsedDAta);
//     //     this.setState({ articles: parsedDAta.articles, totalResults: parsedDAta.totalResults });

//     //     this.setState({
//     //         page: this.state.page - 1,
//     //         articles: parsedDAta.articles,
//     //         loading: false

//     //     })

//     // }

//     // goToNext = async () => {
//     //     console.log("Next");
//     //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {

//     //     }
//     //     else {
//     //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18693128be634912ac37023a462b0c86&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     //         this.setState({ loading: true });
//     //         let data = await fetch(url);
//     //         let parsedDAta = await data.json();
//     //         console.log(parsedDAta);
//     //         this.setState({ articles: parsedDAta.articles, totalResults: parsedDAta.totalResults });

//     //         this.setState({
//     //             page: this.state.page + 1,
//     //             articles: parsedDAta.articles,
//     //             loading: false

//     //         })
//     //     }
//     // }

//     fetchMoreData = async () => {
//         this.setState({
//             page: this.state.page + 1
//         })
        
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        
//         let data = await fetch(url);
//         let parsedDAta = await data.json();
//         console.log(parsedDAta);
//         this.setState({
//             articles: this.state.articles.concat(parsedDAta.articles),
//             totalResults: parsedDAta.totalResults,
//             loading: false

//         });
//       };


//     render() {
//         return (
//             <div className="mt-5">
//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Loader />}
//                 >
//                     <div className="container my-5">
//                         {this.state.loading && <Loader />}

//                         <div className="row row-eq-height">

//                             {this.state.articles.map((element) => {
//                                 return <Newsitem key={element.url} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 65) : ""} imgsrc={element.urlToImage ? element.urlToImage : "https://picsum.photos/770/433"} newsurl={element.url} author={element.author} publishDate={element.publishedAt} />
//                             })}

//                         </div>

//                         {/* <div className="row">
//                         <nav>
//                             <ul className="pagination">
//                                 <li className={`page-item ${this.state.page <= 1 ? 'disabled' : ""}`}><button className="page-link" onClick={this.goToPrev}>Previous</button></li>

//                                 <li className={`page-item ${this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) ? 'disabled' : ""}`}><button type='button' className="page-link" onClick={this.goToNext}>Next</button></li>
//                             </ul>
//                         </nav>
//                     </div> */}
//                     </div>
//                 </InfiniteScroll>
//             </div>
//         );
//     }
// }

// export default News;
