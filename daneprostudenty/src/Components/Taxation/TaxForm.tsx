import React from 'react'
import school_hat_url from "../../Images/school-hat.png"
import { Form } from '../../State/State'
import PersonalForm from './PersonalForm';
import ResidenceForm from './ResidenceForm';
import FamilyForm from './FamilyForm';
import AccountForm from './AccountForm';
import OfficeForm from './OfficeForm';
import IncomeForm from './IncomeForm';
import MarkdownForm from './MarkdownForm';
  
type DispatchFormProps = {
    onSubmitForm: () => void
}

class TaxForm extends React.Component<Form> {

  state = {
    personal_content: true,
    residence_content: true,
    family_content: true,
    account_content: true,
    office_content: true,
    income_content: true,
    markdown_content: true,
  }

  handlePersonalContentChange = () => this.setState({ personal_content: !this.state.personal_content })
  handleResidenceContentChange = () => this.setState({ residence_content: !this.state.residence_content })
  handleFamilyContentChange = () => this.setState({ family_content: !this.state.family_content })
  handleAccountContentChange = () => this.setState({ account_content: !this.state.account_content })
  handleOfficeContentChange = () => this.setState({ office_content: !this.state.office_content })
  handleIncomeContentChange = () => this.setState({ income_content: !this.state.income_content })
  handleMarkdownContentChange = () => this.setState({ markdown_content: !this.state.markdown_content })

  handleSubmitForm = () => {
    console.log("[DEBUG] Submit event =>")
    
    /* personal */
    console.log("Personal =>")
    console.log(this.props.personal.name)
    console.log(this.props.personal.native_surname)
    console.log(this.props.personal.surname)
    console.log(this.props.personal.degree)
    console.log(this.props.personal.personal_id)
    console.log(this.props.personal.phone_number)
    console.log(this.props.personal.email)
    
    /* residence */
    console.log("Residence =>")
    console.log(this.props.residence.city)
    console.log(this.props.residence.street)
    console.log(this.props.residence.descriptive_number)
    console.log(this.props.residence.orientation_number)
    console.log(this.props.residence.zip_code)

    /* spouse */
    console.log("Spouse =>")
    console.log(this.props.family.married)
    console.log(this.props.family.spouse.name)
    console.log(this.props.family.spouse.surname)
    console.log(this.props.family.spouse.degree)
    console.log(this.props.family.spouse.personal_id)
    console.log(this.props.family.spouse.months)
    console.log(this.props.family.spouse.disability)

    /* children list */
    console.log("Children list =>")
    /*
    this.props.family.children.map(child => {
      console.log(child.name)
      console.log(child.surname)
      console.log(child.personal_id)
      console.log(child.months)
    })
    */

    /* account */
    console.log("Account =>")
    console.log(this.props.account.number)
    console.log(this.props.account.name)
    console.log(this.props.account.code)

    /* office */
    console.log("Office =>")
    console.log(this.props.office.region_code)
    console.log(this.props.office.workplace_code)
    
    /* income */
    console.log("Income =>")
    console.log(this.props.income.total)
    console.log(this.props.income.insurance)
    console.log(this.props.income.advances)
    console.log(this.props.income.tax)

    /* markdown */
    console.log("Markdown =>")
    console.log(this.props.markdown.disability)
    console.log(this.props.markdown.extended_disability)
    console.log(this.props.markdown.benefit_card)
    console.log(this.props.markdown.student)
    console.log(this.props.markdown.children_placement)
    console.log(this.props.markdown.gifts)
    console.log(this.props.markdown.interests)
    console.log(this.props.markdown.months_interests)
    console.log(this.props.markdown.pension_insurance)
    console.log(this.props.markdown.private_insurance)
    console.log(this.props.markdown.contributions)
    console.log(this.props.markdown.exams_payment)

    // onSubmitForm();
  }

  render () {
    return (
      <div className="row">
      	<div className="column" />
        	<div className="form-column" > 
          	<h1>Daňové přiznání - formulář pro rok 2018</h1>
            <br />
            <div className="ui icon message">
              <i className="cz flag" style={{ marginRight: "1em" }} />    
              <div className="content">
                <p>Tento formulář je určen pouze pro osoby s občanstvím České republiky. Děkujeme za pochopení.</p>
              </div>
            </div>
            <div className="ui icon message">
            	<img className="ui image" style={{ marginRight: "1em" }} width="60px" height="37px" alt="" src={school_hat_url} />    
              <div className="content">
                <div className="header">Rád by ses dozvěděl o daňovém přiznání více?</div>
                <p>Všechny informace nalezneš na oficiálním webu <a href="https://www.financnisprava.cz/cs/dane-elektronicky/danovy-portal"><b>ministerstva financí</b></a>.</p>
              </div>
            </div>
            <div className="ui form">
              {/* personal */}
              <button className="ui label detail" onClick={this.handlePersonalContentChange}>
                {this.state.personal_content ? "Skrýt" : "Otevřít"}
              </button>
              <h4>1. Osobní údaje</h4>
              {this.state.personal_content && <PersonalForm description={this.props.description} {...this.props.personal} />}
              {/* residence */}
              <button className="ui label detail" onClick={this.handleResidenceContentChange}>
                {this.state.residence_content ? "Skrýt" : "Otevřít"}
              </button>
              <h4>2. Bydliště</h4>
              {this.state.residence_content && <ResidenceForm description={this.props.description} {...this.props.residence} />}
              {/* family */}
              <button className="ui label detail" onClick={this.handleFamilyContentChange}>
                {this.state.family_content ? "Skrýt" : "Otevřít"}
              </button>
              <h4>3. Rodina</h4>
              {this.state.family_content && <FamilyForm description={this.props.description} {...this.props.family} />}
              {/* bank account */}
              <button className="ui label detail" onClick={this.handleAccountContentChange}>
                {this.state.account_content ? "Skrýt" : "Otevřít"}
              </button>
              <h4>4. Bankovní spojení</h4>
              {this.state.account_content && <AccountForm {...this.props.account} />}
              {/* tax office */}
              <button className="ui label detail" onClick={this.handleOfficeContentChange}>
                {this.state.office_content ? "Skrýt" : "Otevřít"}
              </button>
              <h4>5. Finanční úřad</h4>
              {this.state.office_content && <OfficeForm description={this.props.description} {...this.props.office} />}
              {/* income */}
              <button className="ui label detail" onClick={this.handleIncomeContentChange}>
                {this.state.income_content ? "Skrýt" : "Otevřít"}
              </button>
              <h4>6. Příjem</h4>
              {this.state.income_content && <IncomeForm description={this.props.description} {...this.props.income} />}
              {/* markdown */}
              <button className="ui label detail" onClick={this.handleMarkdownContentChange}>
              {this.state.markdown_content ? "Skrýt" : "Otevřít"}
              </button>
              <h4>7. Slevy na dani</h4>
              {this.state.markdown_content && <MarkdownForm description={this.props.description} {...this.props.markdown} />}
              {/* submit */}
              <br />
              <button className="positive ui button" onClick={this.handleSubmitForm}>Odeslat formulář</button>
            </div>
          </div>
        <div className="column" />
      </div>
    )
  }
}

export default TaxForm;
