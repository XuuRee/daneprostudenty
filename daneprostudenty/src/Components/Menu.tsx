import React from 'react'
import '../Static/Menu.css'
import { connect, MapDispatchToProps } from 'react-redux'
import { setPage } from '../Actions/MenuActions'

type MenuProps = {
	page: string
}

type DispatchMenuProps = {
  onPageChange: (page: string) => void
}

const Menu: React.SFC<MenuProps & DispatchMenuProps> = ({ page, onPageChange }) => {

	const handleHomeChange = () => onPageChange("home")
  const handleTutorialChange = () => onPageChange("tutorial")
  const handleTaxationChange = () => onPageChange("taxation")

  return (
    <React.Fragment>
        <div className="nav">
          {/* <img alt="logo" src={logo_url} /> */}
          <div className="nav-right">
				  	<button className={"nav-item " + (page === "home" ? 'active' : '')} onClick={handleHomeChange}>Úvod</button>
            <button className={"nav-item " + (page === "tutorial" ? 'active' : '')} onClick={handleTutorialChange}>Návod</button>
            <button className={"nav-item " + (page === "taxation" ? 'active' : '')} onClick={handleTaxationChange}>Formulář</button>
          </div>
        </div>
      </React.Fragment>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchMenuProps, {}> = dispatch => ({
  onPageChange: page => dispatch(setPage(page))
})

export default connect(
  undefined,
  mapDispatchToProps
)(Menu)
