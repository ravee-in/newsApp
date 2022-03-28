import './App.css';

import React, {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 12;
  const apiKey = "18693128be634912ac37023a462b0c86";
  const [progress, setProgress] = useState(0);

  
    return (
      <Router>
        <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          
          <Switch>
            <Route exact path="/"><News apiKey={apiKey} setProgress={setProgress}   pageSize={pageSize} country="in" category=" "/></Route>
            <Route exact path="/business"><News apiKey={apiKey} setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/></Route>
            <Route exact path="/entertainment"><News apiKey={apiKey} setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route>
            <Route exact path="/general"><News apiKey={apiKey} setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/></Route>
            <Route exact path="/health"><News apiKey={apiKey} setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"/></Route>
            <Route exact path="/science"><News apiKey={apiKey} setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/></Route>
            <Route exact path="/sports"><News apiKey={apiKey} setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports"/></Route>
            <Route exact path="/technology"><News apiKey={apiKey} setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/></Route>
          </Switch>
      </Router>
      );
}

export default App;




// import './App.css';

// import React, { Component } from 'react';
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
//   pageSize = 12;
//   apiKey = "18693128be634912ac37023a462b0c86";

//   state = {
//     progress: 0
//   }

//   setProgress = (progress) => {
//     this.setState({progress: progress})
//   }
//   render() {
//     return (
//       <Router>
//         <LoadingBar
//             height={3}
//             color='#f11946'
//             progress={this.state.progress}
//           />
//           <Navbar />
          
//           <Switch>
//             <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress}   pageSize={this.pageSize} country="in" category=" "/></Route>
//             <Route exact path="/business"><News apiKey={this.apiKey} setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business"/></Route>
//             <Route exact path="/entertainment"><News apiKey={this.apiKey} setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route>
//             <Route exact path="/general"><News apiKey={this.apiKey} setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
//             <Route exact path="/health"><News apiKey={this.apiKey} setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="health"/></Route>
//             <Route exact path="/science"><News apiKey={this.apiKey} setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science"/></Route>
//             <Route exact path="/sports"><News apiKey={this.apiKey} setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route>
//             <Route exact path="/technology"><News apiKey={this.apiKey} setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route>
//           </Switch>
//       </Router>
//       );
//   }
// }



