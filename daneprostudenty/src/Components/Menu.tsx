import React from 'react'
import '../Static/Menu.css'
import * as FileSaver from "file-saver";

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
  handleTaxationChange = () => this.props.onPageChange("taxation")
  handleAPIChange = async () => {
    console.log("Start fetching API...")
    
    const form = {
      name: "Filip",
      surname: "Valchar"
    }

    const response = await fetch('https://api-dps.herokuapp.com/createXLS', {
      method: 'POST',
      body: JSON.stringify(form)
    })
    .then(response => { return response.arrayBuffer() });

    const file = new Blob([response], { type: "application/octet-stream" }) // , { type: "application/vnd.ms-excel" }
    FileSaver.saveAs(file, "form.xlsx");

    /*
    if (response.ok) {
      console.log(response.formData.toString())
      console.log("result:")
      console.log(response.json())
    } else {
      console.log("error")
    }
    */
  }

  render () {
    return (
      <React.Fragment>
        <div className="nav">
          {/* 
          <img alt="logo" src={logo_url} /> 
          */}
          <div className="nav-right">
				  	<button className={this.props.page === "home" ? "nav-item active" : "nav-item"} onClick={this.handleHomeChange}>Úvod</button>
            <button className={this.props.page === "taxation" ? "nav-item active" : "nav-item"} onClick={this.handleTaxationChange}>Formulář</button>
            {/* 
            <button className="nav-item" onClick={this.handleAPIChange}>API</button> 
            <button className="nav-item" onClick={this.handleAboutChange}>O projektu</button>
            */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Menu