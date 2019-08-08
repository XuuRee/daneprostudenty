import React from 'react'
import '../Static/App.css'
import Menu from "./Menu"
import Home from './Home'
import About from './About'
import Tutorial from './Tutorial'
import Taxation from './Taxation'
import State from '../State/State'
import { connect } from 'react-redux'

type AppProps = State

const App: React.SFC<AppProps> = ({ menu, form }) => {

  let content = null

  switch (menu.page) {
    case "home":
      content = <Home />
      break
    case "about":
      content = <About />
      break
    case "tutorial":
      content = <Tutorial />
      break
    case "taxation":
      content = <Taxation {...form} />
      break
    default:
      console.error("Error - switch in App.tsx is not consistent!")
  }

  return (
    <div className="app">
        <div className="ui container">
          <Menu page={menu.page} />
        </div>
        <div className="container">
          {content}
        </div>
    </div>
  )
}

const mapStateToProps = (state: State): AppProps => state

export default connect(
  mapStateToProps,
  undefined
)(App)
