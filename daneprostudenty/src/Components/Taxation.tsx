import React from 'react'
import school_hat_url from "../Images/school-hat.png"

class Taxation extends React.Component {
    state = {
        /* personal */
        name: '',
        surname: '',
        native_surname: '',
        degree: '',
        personal_id: '',
        phone_number: '',
        email: '',
        /* residence */
        city: '',
        street: '',
        descriptive_number: '',
        orientation_number: '',
        zip_code: '',
        /* spouse */
        spouse: false,
        spouse_name: '',
        spouse_surname: '',
        spouse_degree: '',
        spouse_personal_id: '',
        spouse_months: '',
        spouse_disability: false,
        /* other */
        help: undefined,
    }

    /* help events */
    handleStreetHelpChange = () => {
        if (this.state.help === "streetHelp") {
            this.setState({ help: undefined })
        } else {
            this.setState({ help: "streetHelp" })
        }
    }


    /* personal events */
    handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: event.target.value })
    handleNativeSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ native_surname: event.target.value })
    handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ surname: event.target.value })
    handleDegreeChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ degree: event.target.value })
    handlePersonalIdChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ personal_id: event.target.value })
    handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ phone_number: event.target.value })
    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: event.target.value })
    
    /* residence events */
    handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ city: event.target.value })
    handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ street: event.target.value })
    handleDescriptiveNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ descriptive_number: event.target.value })
    handleOrientationNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ orientation_number: event.target.value })
    handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ zip_code: event.target.value })

    /* other events */
    handleSpouseChange = () => this.setState({ spouse: !this.state.spouse })

    handleSubmitForm = () => {
        console.log("submit:")
        console.log(this.state.name)
        console.log(this.state.native_surname)
        console.log(this.state.surname)
        console.log(this.state.degree)
        console.log(this.state.personal_id)
        console.log(this.state.phone_number)
        console.log(this.state.email)
        console.log(this.state.city)
        console.log(this.state.street)
        console.log(this.state.descriptive_number)
        console.log(this.state.orientation_number)
        console.log(this.state.zip_code)
        console.log(this.state.spouse)
        console.log(this.state.spouse_name)
        console.log(this.state.spouse_surname)
        console.log(this.state.spouse_degree)
        console.log(this.state.spouse_personal_id)
        console.log(this.state.spouse_months)
        console.log(this.state.spouse_disability)
        console.log(this.state.help)
    }

    render () {

        const streetHelp = 
            <div className="ui info message">
                <div className="header">Ulice</div>
                <p>- pokud bydlíš na adrese, která žádnou ulici nemá, potom do tohoto pole vyplň název města.</p>
            </div>

        const spouseHelp = 
            <div className="ui info message">
                <div className="header">Pozor!</div>
                <p>Slevu na dani může uplatnit pouze jeden z vás.</p>
            </div>

        return (
            <div className="row">
                <div className="column" />
                <div className="form-column" > 
                    {/* 
                    style={{ backgroundColor: "pink" }} 
                    */}
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
                        <div className="fields">
                            <div className="four wide field">
                                <label>Jméno</label>
                                <input type="text" placeholder="Jméno" value={this.state.name} onChange={this.handleNameChange} />
                            </div>
                            <div className="field">
                                <label>Rodné příjmení</label>
                                <input type="text" placeholder="Rodné přijmení" value={this.state.native_surname} onChange={this.handleNativeSurnameChange} />
                            </div>
                            <div className="field">
                                <label>Přijmení</label>
                                <input type="text" placeholder="Přijmení" value={this.state.surname} onChange={this.handleSurnameChange} />
                            </div>
                            <div className="two wide field">
                                <label>Titul</label>
                                <input type="text" placeholder="Titul" value={this.state.degree} onChange={this.handleDegreeChange} />
                            </div>
                        </div>
                        <div className="fields">
                            <div className="six wide field">
                                <label>Rodné číslo</label>
                                <input type="text" placeholder="Rodné číslo" value={this.state.personal_id} onChange={this.handlePersonalIdChange} />
                            </div>
                        </div>
                        <div className="fields">
                            <div className="field">
                                <label>Telefonní číslo</label>
                                <input type="text" placeholder="Telefonní číslo" value={this.state.phone_number} onChange={this.handlePhoneNumberChange} />
                            </div>
                            <div className="field">
                                <label>E-mail</label>
                                <input type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange} />
                            </div>
                        </div>
                        <h4>2. Bydliště &nbsp;&nbsp;&nbsp;<i className="cz flag" /></h4>
                        <div className="fields">
                            <div className="four wide field">
                                <label>Město</label>
                                <input type="text" placeholder="Mesto" value={this.state.city} onChange={this.handleCityChange} />
                            </div>
                        </div>
                        <div className="fields">
                            <div className="five wide field">
                                <label>Ulice</label>
                                <input type="text" placeholder="Ulice" value={this.state.street} onClick={this.handleStreetHelpChange} onChange={this.handleStreetChange} />
                            </div>
                            <div className="three wide field">
                                <label>Číslo popisné</label>
                                <input type="text" placeholder="Číslo popisné" value={this.state.descriptive_number} onChange={this.handleDescriptiveNumberChange} />
                            </div>
                            <div className="three wide field">
                                <label>Číslo orientační</label>
                                <input type="text" placeholder="Číslo orientační" value={this.state.orientation_number} onChange={this.handleOrientationNumberChange} />
                            </div>
                        </div>
                        {this.state.help === "streetHelp" && streetHelp}
                        <div className="fields">
                            <div className="three wide field">
                                <label>PSČ</label>
                                <input type="text" placeholder="PSČ" value={this.state.zip_code} onChange={this.handleZipCodeChange} />
                            </div>
                        </div>
                        <h4>3. Rodina</h4>
                        <div className="fields">
                            <div className="field ui checkbox">
                                <input type="checkbox" name="Manžel / manželka" checked={this.state.spouse} onChange={this.handleSpouseChange} />
                                <label>Mám manžela / manželku a chci uplatnit slevu.</label>
                            </div>
                        </div>
                        {this.state.spouse && spouseHelp}
                        {
                            this.state.spouse && 
                                <div className="fields">
                                    <div className="four wide field">
                                        <label>Jméno</label>
                                        <input type="text" placeholder="Jméno" value={this.state.spouse_name} />
                                    </div>
                                    <div className="field">
                                        <label>Přijmení</label>
                                        <input type="text" placeholder="Přijmení" value={this.state.spouse_surname} />
                                    </div>
                                    <div className="two wide field">
                                        <label>Titul</label>
                                        <input type="text" placeholder="Titul" value={this.state.spouse_degree} />
                                    </div>
                                </div>
                        }
                        {
                            this.state.spouse && 
                                <div className="fields">
                                     <div className="six wide field">
                                        <label>Rodné číslo</label>
                                        <input type="text" placeholder="Rodné číslo" value={this.state.spouse_personal_id} />
                                    </div>
                                </div>
                        }
                        { 
                            this.state.spouse && 
                                <div className="fields">
                                    <div className="field">
                                        <label>Počet měsíců</label>
                                        <input type="text" placeholder="Počet měsíců" value={this.state.spouse_months} />
                                    </div>
                                </div>
                        }
                        { 
                            this.state.spouse && 
                                <React.Fragment>
                                    <br />
                                    <div className="fields">
                                        <div className="field ui checkbox">
                                            <input type="checkbox" name="Manžel / manželka" checked={this.state.spouse_disability} />
                                            <label>ZTP</label>
                                        </div>
                                    </div>
                                </React.Fragment>
                        }
                        <br />
                        <button className="positive ui button" onClick={this.handleSubmitForm}>Odeslat formulář</button>
                    </div>
                </div>
                <div className="column" />
            </div>
        )
    }
}
  
export default Taxation;