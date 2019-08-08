import React from 'react'
import { Personal } from '../../State/State'
import StringInput from '../../Fields/StringInput'
import { connect, MapDispatchToProps } from 'react-redux'
import { setPersonalName, setPersonalNativeSurname, setPersonalSurname, setDescription, setPersonalDegree, setPersonalId, setPersonalPhoneNumber, setPersonalEmail } from '../../Actions/FormActions'

type PersonalProps = { 
  description: string | undefined 
} & Personal

type DispatchPersonalProps = {
  onDescriptionChange: (description: string | undefined) => void
  onNameChange: (name: string) => void
  onNativeSurnameChange: (native_surname: string) => void
  onSurnameChange: (surname: string) => void
  onDegreeChange: (degree: string) => void
  onPersonalIdChange: (id: string) => void
  onPhoneNumberChange: (phone_number: string) => void
  onEmailChange: (email: string) => void
}

const PersonalForm: React.SFC<PersonalProps & DispatchPersonalProps> = ({ 
  description, 
  name, 
  native_surname, 
  surname, 
  degree, 
  personal_id, 
  phone_number, 
  email,
  onDescriptionChange,
  onNameChange,
  onNativeSurnameChange,
  onSurnameChange,
  onDegreeChange,
  onPersonalIdChange,
  onPhoneNumberChange,
  onEmailChange
}) => {

  // use only camel case or underscore!
  const handleNameChange = (name: string) => onNameChange(name)
  const handleNativeSurnameChange = (native_surname: string) => onNativeSurnameChange(native_surname)
  const handleSurnameChange = (surname: string) => onSurnameChange(surname)
  const handleDegreeChange = (degree: string) => onDegreeChange(degree)

  const handlePersonalIdChange = (id: string) => onPersonalIdChange(id)
  
  const handlePhoneNumberChange = (phone_number: string) => onPhoneNumberChange(phone_number)
  const handleEmailChange = (email: string) => onEmailChange(email)

  const handleNativeSurnameDescriptionChange = () => 
    description === "nativeSurnameDescription" 
      ? onDescriptionChange(undefined)
      : onDescriptionChange("nativeSurnameDescription")

  const nameProps = { label: 'Jméno', placeholder: 'Jméno', value: name, size: 4 }
  const nativeSurnameProps = { label: 'Rodné příjmení', placeholder: 'Rodné příjmení', value: native_surname, size: -1 }
  const surnameProps = { label: 'Příjmení', placeholder: 'Příjmení', value: surname, size: -1 }
  const degreeProps = { label: 'Titul', placeholder: 'Titul', value: degree, size: 2 }

  const personalIdProps = { label: 'Rodné číslo', placeholder: 'Rodné číslo', value: personal_id, size: 6 }

  const phoneNumberProps = { label: 'Telefonní číslo', placeholder: 'Telefonní číslo', value: phone_number, size: -1 }
  const emailProps = { label: 'Email', placeholder: 'Email', value: email, size: -1 }

  const nativeSurnameDescription = 
    <div className="ui info message">
      <div className="header">Rodné příjmení</div>
      <p>Pokud jste se nechali přejmenovat...</p>
    </div>

  // also onBlur change description!
  return (
    <React.Fragment>
      <div className="fields">
        <StringInput {...nameProps} onValueChange={handleNameChange} />
        <StringInput {...nativeSurnameProps} onDescriptionChange={handleNativeSurnameDescriptionChange} onValueChange={handleNativeSurnameChange} />
        <StringInput {...surnameProps} onValueChange={handleSurnameChange} />
        <StringInput {...degreeProps} onValueChange={handleDegreeChange} />
      </div>
      {
        description !== undefined && description === "nativeSurnameDescription" 
          ? nativeSurnameDescription 
          : null
      }
      <div className="fields">
        <StringInput {...personalIdProps} onValueChange={handlePersonalIdChange} />
      </div>
      <div className="fields">
        <StringInput {...phoneNumberProps} onValueChange={handlePhoneNumberChange} />
        <StringInput {...emailProps} onValueChange={handleEmailChange} />
      </div>
    </React.Fragment>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchPersonalProps, {}> = dispatch => ({
  onDescriptionChange: description => dispatch(setDescription(description)),
  onNameChange: name => dispatch(setPersonalName(name)),
  onNativeSurnameChange: native_surname => dispatch(setPersonalNativeSurname(native_surname)),
  onSurnameChange: surname => dispatch(setPersonalSurname(surname)),
  onDegreeChange: degree => dispatch(setPersonalDegree(degree)),
  onPersonalIdChange: id => dispatch(setPersonalId(id)),
  onPhoneNumberChange: phone_number => dispatch(setPersonalPhoneNumber(phone_number)),
  onEmailChange: email => dispatch(setPersonalEmail(email))
})

export default connect(
  undefined,
  mapDispatchToProps
)(PersonalForm)
