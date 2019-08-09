import React from 'react'
import { Residence } from '../../State/State'
import StringInput from '../../Fields/StringInput'
import { connect, MapDispatchToProps } from 'react-redux'
import { 
	setDescription, 
	setResidenceCity, 
	setResidenceStreet, 
	setResidenceDescriptiveNumber, 
	setResidenceOrientationNumber, 
	setResidenceZipCode 
} from '../../Actions/FormActions'

type ResidenceProps = { 
  description: string | undefined 
} & Residence

type DispatchResidenceProps = {
  onDescriptionChange: (description: string | undefined) => void
  onCityChange: (city: string) => void
  onStreetChange: (street: string) => void
  onDescriptiveNumberChange: (descriptive_number: string) => void
  onOrientationNumberChange: (orientation_number: string) => void
  onZipCodeChange: (zip_code: string) => void
}

const ResidenceForm: React.SFC<ResidenceProps & DispatchResidenceProps> = ({ 
	description, 
	city, 
	street, 
	descriptive_number, 
	orientation_number, 
	zip_code,
	onDescriptionChange,
	onCityChange,
	onStreetChange,
	onDescriptiveNumberChange,
	onOrientationNumberChange,
	onZipCodeChange
}) => {

	/* events */

	const handleCityChange = (city: string) => onCityChange(city)

	const handleStreetChange = (street: string) => onStreetChange(street)
  const handleDescriptiveNumberChange = (descriptive_number: string) => onDescriptiveNumberChange(descriptive_number)
  const handleOrientationNumberChange = (orientation_number: string) => onOrientationNumberChange(orientation_number)

  const handleZipCodeChange = (zip_code: string) => onZipCodeChange(zip_code)

	const handleStreetDescriptionChange = () => 
		description === "streetDescription" 
			? onDescriptionChange(undefined)
			: onDescriptionChange("streetDescription")
	
	const handleLeaveChange = () => onDescriptionChange(undefined)

	/* props */

	const cityProps = { label: 'Město', placeholder: 'Město', value: city, size: 4 }

  const streetProps = { label: 'Ulice', placeholder: 'Ulice', value: street, size: 5 }
  const descriptiveNumberProps = { label: 'Číslo popisné', placeholder: 'Číslo popisné', value: descriptive_number, size: 3 }
  const orientationNumberProps = { label: 'Číslo orientační', placeholder: 'Číslo orientační', value: orientation_number, size: 3 }

  const zipCodeProps = { label: 'PSČ', placeholder: 'PSČ', value: zip_code, size: 3 }

	/* descriptions */

	const streetDescription = 
		<div className="ui info message">
			<div className="header">Ulice</div>
      <p>- pokud bydlíš na adrese, která žádnou ulici nemá, potom do tohoto pole vyplň název města.</p>
		</div>

  return (
    <React.Fragment>
      <div className="fields">
				<StringInput {...cityProps} onValueChange={handleCityChange} />
			</div>
			<div className="fields">
				<StringInput 
					{...streetProps}
					onDescriptionChange={handleStreetDescriptionChange} 
					onLeaveChange={handleLeaveChange} 
					onValueChange={handleStreetChange} 
				/>
				<StringInput {...descriptiveNumberProps} onValueChange={handleDescriptiveNumberChange} />
				<StringInput {...orientationNumberProps} onValueChange={handleOrientationNumberChange} />
			</div>
			{
        description !== undefined && description === "streetDescription" 
          ? streetDescription 
          : null
      }
			<div className="fields">
				<StringInput {...zipCodeProps} onValueChange={handleZipCodeChange} />
			</div>
		</React.Fragment>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchResidenceProps, {}> = dispatch => ({
  onDescriptionChange: description => dispatch(setDescription(description)),
	onCityChange: city => dispatch(setResidenceCity(city)),
	onStreetChange: street => dispatch(setResidenceStreet(street)),
	onDescriptiveNumberChange: descriptive_number => dispatch(setResidenceDescriptiveNumber(descriptive_number)),
	onOrientationNumberChange: orientation_number => dispatch(setResidenceOrientationNumber(orientation_number)),
	onZipCodeChange: zip_code => dispatch(setResidenceZipCode(zip_code)),
})

export default connect(
  undefined,
  mapDispatchToProps
)(ResidenceForm)
