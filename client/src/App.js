import React, {Component} from 'react';
// import components from react router dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import apps from "./apps.json";
import Allapp from "./pages/Allapp";

// import components and pages to use
import Navbar from './components/Navbar';
// import Search from './pages/Search';
// import Saved from './pages/Saved';

class App extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    apps,
    apps: apps,
  };
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Switch>
          {/* <Route exact path="/" component={Search}/>
          <Route exact path="/saved" component={Saved}/> */}
          <Route
            render={() => <h1 className="text-center">Awesome Apps Here
            <span role="img">💩</span>
            <div> {
            this.state.apps.map(apps => (
              <Allapp key={apps.id}
              appname={apps.appname}
              shortDes={apps.shortDes}
              description={apps.description}
              image={apps.image}
              link={apps.link}
              />
            ))
          }</div>
          </h1>
        }/>
        </Switch>
      </div>
    </Router>

    )
    }
}


export default App;
