import React from 'react'
import { Family } from '../../State/State'
import { connect, MapDispatchToProps } from 'react-redux'
import { setFamilyMarried, setFamilyChildless, setDescription } from '../../Actions/FormActions'
import SpouseForm from './SpouseForm'
import ChildrenForm from './ChildrenForm'

type FamilyProps = { 
  description: string | undefined 
} & Family

type DispatchFamilyProps = {
  onDescriptionChange: (description: string | undefined) => void
  onMarriedChange: () => void
  onChildlessChange: () => void
}

const FamilyForm: React.SFC<FamilyProps & DispatchFamilyProps> = ({ 
  description, 
	married,
	spouse,
	childless,
	children,
  onDescriptionChange,
  onMarriedChange,
  onChildlessChange,
}) => {

  /* events */
	const handleMarriedChange = () => onMarriedChange()
  const handleChildessChange = () => onChildlessChange()
  
  /* props */

	// const nameProps = { label: 'Jméno', placeholder: 'Jméno', value: name, size: 4 }
	
  // const nativeSurnameProps = { label: 'Rodné příjmení', placeholder: 'Rodné příjmení', value: native_surname, size: -1 }

	/* descriptions */

  return (
    <React.Fragment>
      <div className="fields">
        <div className="field ui checkbox">
          <input type="checkbox" name="Manžel / manželka" checked={married} onChange={handleMarriedChange} />
          <label>Mám manžela / manželku a chci uplatnit slevu.</label>
        </div>
      </div>
			{married && <SpouseForm description={description} {...spouse} />}
			<br />
			<div className="fields">
        <div className="field ui checkbox">
          <input type="checkbox" name="Děti" checked={!childless} onChange={handleChildessChange} />
          <label>Mám děti.</label>
        </div>
      </div>
			{!childless && <ChildrenForm />}
    </React.Fragment>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchFamilyProps, {}> = dispatch => ({
  onDescriptionChange: description => dispatch(setDescription(description)),
	onMarriedChange: () => dispatch(setFamilyMarried()),
	onChildlessChange: () => dispatch(setFamilyChildless()),
})

export default connect(
  undefined,
  mapDispatchToProps
)(FamilyForm)