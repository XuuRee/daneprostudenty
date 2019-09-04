import React from 'react'
import { Income } from '../../State/State'
import { connect, MapDispatchToProps } from 'react-redux'
import { setDescription, setIncomeTotal, setIncomeInsurance, setIncomeAdvances, setIncomeTax } from '../../Actions/FormActions';
import StringInput from '../../Fields/StringInput';

type IncomeProps = { 
  description: string | undefined 
} & Income

type DispatchIncomeProps = {
  onDescriptionChange: (description: string | undefined) => void
  onTotalChange: (total: string) => void
  onInsuranceChange: (insurance: string) => void
  onAdvancesChange: (advances: string) => void
  onTaxChange: (tax: string) => void
}

const IncomeForm: React.SFC<IncomeProps & DispatchIncomeProps> = ({ 
  description, 
	total,
	insurance,
	advances,
	tax,
  onDescriptionChange,
  onTotalChange,
  onInsuranceChange,
  onAdvancesChange,
  onTaxChange,
}) => {

  /* events */
  const handleTotalChange = (total: string) => onTotalChange(total)
  const handleInsuranceChange = (insurance: string) => onInsuranceChange(insurance)
  const handleAdvancesChange = (advances: string) => onAdvancesChange(advances)
  const handleTaxChange = (tax: string) => onTaxChange(tax)
	/*
	const handleNativeSurnameDescriptionChange = () => 
    description === "nativeSurnameDescription" 
      ? onDescriptionChange(undefined)
      : onDescriptionChange("nativeSurnameDescription")
  const handleLeaveChange = () => onDescriptionChange(undefined)
	*/

  /* props */
  const totalProps = { label: 'Celkový příjem', placeholder: 'Celkový příjem', value: total, size: -1 }
  const insuranceProps = { label: 'Zdravotní a sociální pojíštění', placeholder: 'Zdravotní a sociální pojíštění', value: insurance, size: -1 }
  const advancesProps = { label: 'Sražené zálohy', placeholder: 'Sražené zálohy', value: advances, size: -1 }
  const taxProps = { label: 'Sražené daně', placeholder: 'Sražené daně', value: tax, size: -1 }
  
  /* descriptions 
  const nativeSurnameDescription = 
    <div className="ui info message">
      <div className="header">Rodné příjmení</div>
      <p>Pokud jste se nechali přejmenovat...</p>
    </div>
	*/

  return (
    <React.Fragment>
      <div className="fields">
        <StringInput {...totalProps} onValueChange={handleTotalChange} />
        {/*
				<StringInput 
          {...nativeSurnameProps} 
          onDescriptionChange={handleNativeSurnameDescriptionChange} 
          onLeaveChange={handleLeaveChange} 
          onValueChange={handleNativeSurnameChange} 
				/>
				*/}
      </div>
			{/*
      {
        description !== undefined && description === "nativeSurnameDescription" 
          ? nativeSurnameDescription 
          : null
			}
			*/}
      <div className="fields">
        <StringInput {...insuranceProps} onValueChange={handleInsuranceChange} />
      </div>
      <div className="fields">
        <StringInput {...advancesProps} onValueChange={handleAdvancesChange} />
        <StringInput {...taxProps} onValueChange={handleTaxChange} />
      </div>
    </React.Fragment>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchIncomeProps, {}> = dispatch => ({
	onDescriptionChange: description => dispatch(setDescription(description)),
	onTotalChange: total => dispatch(setIncomeTotal(total)),
  onInsuranceChange: insurance => dispatch(setIncomeInsurance(insurance)),
  onAdvancesChange: advances => dispatch(setIncomeAdvances(advances)),
  onTaxChange: tax => dispatch(setIncomeTax(tax)),
})

export default connect(
  undefined,
  mapDispatchToProps
)(IncomeForm)