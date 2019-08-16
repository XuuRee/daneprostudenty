import React from 'react'
import { Spouse } from '../../State/State'
import StringInput from '../../Fields/StringInput'
import NumberInput from '../../Fields/NumberInput'
import { connect, MapDispatchToProps } from 'react-redux'
import { 
  setSpouseName, 
  setSpouseSurname, 
  setSpouseDegree, 
  setSpouseId, 
  setSpouseMonths, 
  setSpouseDisability, 
  setDescription
} from '../../Actions/FormActions'

type SpouseProps = { 
  description: string | undefined 
} & Spouse

type DispatchSpouseProps = {
  onDescriptionChange: (description: string | undefined) => void
  onNameChange: (name: string) => void
  onSurnameChange: (surname: string) => void
  onDegreeChange: (degree: string) => void
  onPersonalIdChange: (id: string) => void
  onMonthsChange: (months: number) => void
  onDisabilityChange: () => void
}

const SpouseForm: React.SFC<SpouseProps & DispatchSpouseProps> = ({
  description, 
  name, 
  surname, 
  degree, 
  personal_id, 
  months,
  disability,
  onDescriptionChange,
  onNameChange,
  onSurnameChange,
  onDegreeChange,
  onPersonalIdChange,
  onMonthsChange,
  onDisabilityChange 
}) => {

  /* events */
  const handleNameChange = (name: string) => onNameChange(name)
  const handleSurnameChange = (surname: string) => onSurnameChange(surname)
  const handleDegreeChange = (degree: string) => onDegreeChange(degree)
  const handlePersonalIdChange = (id: string) => onPersonalIdChange(id)
  const handleMonthsChange = (months: number) => onMonthsChange(months)
  const handleDisabilityChange = () => onDisabilityChange()
  const handleMonthsDescriptionChange = () => 
  description === "monthsDescription" 
    ? onDescriptionChange(undefined)
    : onDescriptionChange("monthsDescription")
  const handleLeaveChange = () => onDescriptionChange(undefined)

  /* props */
  const nameProps = { label: 'Jméno', placeholder: 'Jméno', value: name, size: -1 }
  const surnameProps = { label: 'Příjmení', placeholder: 'Příjmení', value: surname, size: -1 }
  const degreeProps = { label: 'Titul', placeholder: 'Titul', value: degree, size: 2 }
  const personalIdProps = { label: 'Rodné číslo', placeholder: 'Rodné číslo', value: personal_id, size: 6 }
  const monthsProps = { label: 'Počet měsíců', placeholder: 'Počet měsíců', value: months, size: 2 }

  const marriedDescription = 
    <div className="ui info message">
      <div className="header">Pozor!</div>
      <p>Slevu na dani může uplatnit pouze jeden z manželů.</p>
    </div>

  const monthsDescription = 
    <div className="ui info message">
      <div className="header">Počet měsíců</div>
      <p>Zde zadejte počet měsíců v manželství za minulý rok.</p>
    </div>

  /* descriptions */

  return (
    <React.Fragment>
      {marriedDescription}
      <h4>3.1. Osobní údaje manžela / manželky</h4>
      <div className="fields">
        <StringInput {...nameProps} onValueChange={handleNameChange} />
        <StringInput {...surnameProps} onValueChange={handleSurnameChange} />
        <StringInput {...degreeProps} onValueChange={handleDegreeChange} />
      </div>
      <div className="fields" style={{ padding: "0.5em 0 0.5em 0" }} >
        <div className="field ui checkbox">
          <input type="checkbox" name="ZTP" checked={disability} onChange={handleDisabilityChange} />
          <label>ZTP</label>
        </div>
      </div>
      <div className="fields">
        <StringInput {...personalIdProps} onValueChange={handlePersonalIdChange} />
      </div>
      <div className="fields">
        <NumberInput {...monthsProps} onDescriptionChange={handleMonthsDescriptionChange} onLeaveChange={handleLeaveChange} onValueChange={handleMonthsChange} />
      </div>
      {
        description !== undefined && description === "monthsDescription" 
          ? monthsDescription 
          : null
      }
      <br />
    </React.Fragment>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchSpouseProps, {}> = dispatch => ({
  onDescriptionChange: description => dispatch(setDescription(description)),
  onNameChange: name => dispatch(setSpouseName(name)),
  onSurnameChange: surname => dispatch(setSpouseSurname(surname)),
  onDegreeChange: degree => dispatch(setSpouseDegree(degree)),
  onPersonalIdChange: id => dispatch(setSpouseId(id)),
  onMonthsChange: months => dispatch(setSpouseMonths(months)),
  onDisabilityChange: () => dispatch(setSpouseDisability())
})

export default connect(
  undefined,
  mapDispatchToProps
)(SpouseForm)
