import React from 'react';
import '../Static/App.css';
import Menu from "./Menu";
import Home from './Home';
import About from './About';
import Taxation from './Taxation';

class App extends React.Component {
  state = {
    page: "home",
  }

  handlePageChange = (value: string) => this.setState({ page: value })

  render () {

    let content = null

    switch (this.state.page) {
      case "home":
        content = <Home />
        break;
      case "about":
        content = <About />
        break;
      case "taxation":
        content = <Taxation />
        break;
      default:
        console.error("Error - switch in App.tsx is not consistent!");  
        break;
    }

    return (
      <div className="app">
        <div className="ui container">
          <Menu page={this.state.page} onPageChange={this.handlePageChange} />
        </div>
        <div className="ui container">
          {content}
        </div>
    </div>
    )
  }
}

export default App;
