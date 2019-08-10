import React from 'react'
import { Family, Children } from '../../State/State'
import { connect, MapDispatchToProps } from 'react-redux'
import { setFamilyMarried, setFamilyChildless, setDescription, addChildren } from '../../Actions/FormActions'
import SpouseForm from './SpouseForm'
import ChildrenForm from './ChildrenForm'
import ChildrenList from './ChildrenList'

type FamilyProps = { 
  description: string | undefined 
} & Family

type DispatchFamilyProps = {
  onDescriptionChange: (description: string | undefined) => void
  onMarriedChange: () => void
  onChildlessChange: () => void
  onAddChildrenChange: (child: Children) => void
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
  onAddChildrenChange
}) => {

  /* events */
	const handleMarriedChange = () => onMarriedChange()
  const handleChildessChange = () => onChildlessChange()
  const handleChildrenChange = (child: Children) => onAddChildrenChange(child)
  
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
			{
        !childless && 
          <div>
            <h4>3.2. Osobní údaje dětí</h4>
            <ChildrenList childrenList={children} />
            <ChildrenForm description={description} onAddChildren={handleChildrenChange} />
          </div>
      }
    </React.Fragment>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchFamilyProps, {}> = dispatch => ({
  onDescriptionChange: description => dispatch(setDescription(description)),
	onMarriedChange: () => dispatch(setFamilyMarried()),
  onChildlessChange: () => dispatch(setFamilyChildless()),
  onAddChildrenChange: child => dispatch(addChildren(child)),
})

export default connect(
  undefined,
  mapDispatchToProps
)(FamilyForm)