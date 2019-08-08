import React from 'react'
import school_hat_url from "../../Images/school-hat.png"
import { Form } from '../../State/State'
import PersonalForm from './PersonalForm';
  
type DispatchFormProps = {
    onLabelChange: (value: string) => void
    onSubmitForm: () => void
}

const TaxForm: React.SFC<Form> = ({ 
	description, 
	personal, 
	residence, 
	family, 
	// onLabelChange, 
	// onSubmitForm 
}) => {

    const handleSubmitForm = () => {
        console.log("[DEBUG] Submit event =>")
        console.log(personal.name)

        // onSubmitForm();
    }
    
    return (
    	<div className="row">
      	<div className="column" />
        	<div className="form-column" > 
          	<h1>Daňové přiznání - formulář pro rok 2018</h1>
            <br />
            <div className="ui icon message">
            	<img className="ui image" style={{ marginRight: "1em" }} width="60px" height="37px" alt="" src={school_hat_url} />    
              <div className="content">
                <div className="header">Rád by ses dozvěděl o daňovém přiznání více?</div>
                <p>Všechny informace nalezneš na oficiálním webu <a href="https://www.financnisprava.cz/cs/dane-elektronicky/danovy-portal"><b>ministerstva financí</b></a>.</p>
              </div>
            </div>
            <br />
            <div className="ui form">
              <h4>1. Osobní údaje</h4>
              <PersonalForm description={description} {...personal} />
              <h4>2. Bydliště &nbsp;&nbsp;&nbsp;<i className="cz flag" /></h4>
              <br />
              <button className="positive ui button" onClick={handleSubmitForm}>Odeslat formulář</button>
            </div>
          </div>
        <div className="column" />
      </div>
    )
}

export default TaxForm;