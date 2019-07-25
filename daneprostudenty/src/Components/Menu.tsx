import React from 'react'
import '../Static/Menu.css'
import logo_url from '../Images/logo.png'

type MenuProps = {
	page: string;
}

type DispatchMenuProps = {
  onPageChange: (value: string) => void;
};

class Menu extends React.Component<MenuProps & DispatchMenuProps> {
  state = {
		submenu: false,	
  }

	handleHomeChange = () => this.props.onPageChange("home")
	handleAboutChange = () => this.props.onPageChange("about")

  render () {
    return (
      <div className="nav">
        <img alt="logo" src={logo_url} />
        <div className="nav-right">
					<button className="nav-item active" onClick={this.handleHomeChange}>Úvod</button>
          <button className="nav-item" onClick={this.handleAboutChange}>O projektu</button>
					{/*
					<button >Quis</button>
					<button >Turpis</button>
					*/}
        </div>
      </div>
    )
  }
}

export default Menu