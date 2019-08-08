import React from 'react'
import illustration_url from "../Images/schoolbooks-colour.png"
import { MapDispatchToProps, connect } from 'react-redux'
import { setPage } from '../Actions/MenuActions'

type DispatchMenuProps = {
  onPageChange: (page: string) => void
}

const Home: React.SFC<DispatchMenuProps> = ({ onPageChange }) => {

  const handleTutorialChange = () => onPageChange("tutorial")
  const handleTaxationChange = () => onPageChange("taxation")

  return (
    <div className="ui grid">
      <div className="ui seven wide column grid pad-1">
        <img src={illustration_url} style={{ float: "right", margin: "2.5em" }} width="350px" height="350px" alt="Úvodní obrázek" />
      </div>
      <div className="ui nine wide column grid pad-1">
        <div style={{ margin: "2.5em" }}>
          <div className="font-1">Vítej studente!</div>
          <br />
          <h1>Potřebuješ pomoc s vyplněním daňového přiznání?</h1>
          <br />
          <button className="big ui button" onClick={handleTutorialChange}>Jak na to?</button>
          <button className="big ui positive button" onClick={handleTaxationChange}>Vyplnit daňové přiznání</button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchMenuProps, {}> = dispatch => ({
  onPageChange: page => dispatch(setPage(page))
})

export default connect(
  undefined,
  mapDispatchToProps
)(Home)
