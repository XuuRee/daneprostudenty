import React from 'react'
import StringInput from '../../Fields/StringInput'
import { Children } from '../../State/State'
import NumberInput from '../../Fields/NumberInput';

type DescriptionProps = {
  description: string | undefined
}

type DispatchChildrenProps = {
  onAddChildren: (children: Children) => void
}

class ChildrenForm extends React.Component<DescriptionProps & DispatchChildrenProps> {

  state = {
    ch_name: '',
    ch_surname: '',
    ch_personal_id: '',
    ch_months: 0
  }

  handleNameChange = (name: string) => this.setState({ ch_name: name }) 
  handleSurnameChange = (surname: string) => this.setState({ ch_surname: surname })
  handlePersonalIdChange = (personal_id: string) => this.setState({ ch_personal_id: personal_id })
  handleMonthsChange = (months: number) => this.setState({ ch_months: months })

  handleAddChildChange = () => {
    // validate children form

    // check whether object is correct
    const children = {
      name: this.state.ch_name,
      surname: this.state.ch_surname,
      personal_id: this.state.ch_personal_id,
      months: this.state.ch_months
    }

    this.props.onAddChildren(children)
  }

  render () {

    /* props */
    const nameProps = { label: 'Jméno', placeholder: 'Jméno', value: this.state.ch_name, size: -1 }
    const surnameProps = { label: 'Příjmení', placeholder: 'Příjmení', value: this.state.ch_surname, size: -1 }
    const personalIdProps = { label: 'Rodné číslo', placeholder: 'Rodné číslo', value: this.state.ch_personal_id, size: -1 }
    const monthsProps = { label: 'Počet měsíců', placeholder: 'Počet měsíců', value: this.state.ch_months, size: -1 }

    return (
      <React.Fragment>
      
      {/* form */}
      <div className="fields">
        <StringInput {...nameProps} onValueChange={this.handleNameChange} />
        <StringInput {...surnameProps} onValueChange={this.handleSurnameChange} />
        <NumberInput {...monthsProps} onValueChange={this.handleMonthsChange} />
      </div>
      <div className="fields">
        <StringInput {...personalIdProps} onValueChange={this.handlePersonalIdChange} />
      </div>
      <button className="ui primary button" onClick={this.handleAddChildChange}>
        Přidat dítě
      </button>
    </React.Fragment>
    )
  }
}

export default ChildrenForm