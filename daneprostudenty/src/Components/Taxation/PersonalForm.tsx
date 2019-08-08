import React from 'react';
import { Personal } from '../../State/State';
import StringInput from '../../Fields/StringInput';
import { connect, MapDispatchToProps } from 'react-redux';
import { setPersonalName } from '../../Actions/FormActions';

type PersonalProps = { 
  description: string | null 
} & Personal

type DispatchPersonalProps = {
  onNameChange: (name: string) => void
}

const PersonalForm: React.SFC<PersonalProps & DispatchPersonalProps> = ({ 
  description, 
  name, 
  surname, 
  native_surname, 
  degree, 
  personal_id, 
  phone_number, 
  email,
  onNameChange,
}) => {

  const handleNameChange = (name: string) => onNameChange(name); 

  const nameProps = { label: 'Jmeno', placeholder: 'Jméno', value: name, size: 4 }

  return (
    <div className="fields">
      <StringInput {...nameProps} onValueChange={handleNameChange} />
    </div>
  );
}

const mapDispatchToProps: MapDispatchToProps<DispatchPersonalProps, {}> = dispatch => ({
  onNameChange: name => dispatch(setPersonalName(name)),
})

export default connect(
  undefined,
  mapDispatchToProps
)(PersonalForm)
