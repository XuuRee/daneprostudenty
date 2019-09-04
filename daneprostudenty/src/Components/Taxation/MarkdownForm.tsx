import React from 'react'
import { Markdown } from '../../State/State'
import { connect, MapDispatchToProps } from 'react-redux'
import { 
	setDescription, 
	setMarkdownDisability, 
	setMarkdownExtendedDisability, 
	setMarkdownBenefitCard, 
	setMarkdownStudent, 
	setMarkdownChildrenPlacement, 
	setMarkdownGifts, 
	setMarkdownInterests, 
	setMarkdownMonthsInterests,
	setMarkdownPensionInsurance,
	setMarkdownPrivateInsurance,
	setMarkdownContributions,
	setMarkdownExamsPayment,
} from '../../Actions/FormActions';
import StringInput from '../../Fields/StringInput';

type MarkdownProps = { 
  description: string | undefined 
} & Markdown

type DispatchMarkdownProps = {
  onDescriptionChange: (description: string | undefined) => void
  onDisabilityChange: (disability: string) => void
  onExtendedDisabilityChange: (extended_disability: string) => void
  onBenefitCardChange: (benefit_card: string) => void
	onStudentChange: (student: string) => void
	onChildrenPlacementChange: (children_placement: string) => void
	onGiftsChange: (gifts: string) => void
	onInterestsChange: (interests: string) => void
	onMonthsInterestsChange: (months_interests: string) => void
	onPensionInsuranceChange: (pension_insurance: string) => void
	onPrivateInsuranceChange: (private_insurance: string) => void
	onContributionsChange: (contributions: string) => void
	onExamsPaymentChange: (exams_payment: string) => void
}

const MarkdownForm: React.SFC<MarkdownProps & DispatchMarkdownProps> = ({ 
  description, 
	disability,
	extended_disability,
	benefit_card,
	student,
	children_placement,
	gifts,
	interests,
	months_interests,
	pension_insurance,
	private_insurance,
	contributions,
	exams_payment,
  onDescriptionChange,
	onDisabilityChange,
	onExtendedDisabilityChange,
	onBenefitCardChange,
	onStudentChange,
	onChildrenPlacementChange,
	onGiftsChange,
	onInterestsChange,
	onMonthsInterestsChange,
	onPensionInsuranceChange,
	onPrivateInsuranceChange,
	onContributionsChange,
	onExamsPaymentChange
}) => {

  /* events */
  const handleDisabilityChange = (disability: string) => onDisabilityChange(disability)
  const handleExtendedDisabilityChange = (extended_disability: string) => onExtendedDisabilityChange(extended_disability)
  const handleBenefitCardChange = (benefit_card: string) => onBenefitCardChange(benefit_card)
  const handleStudentChange = (student: string) => onStudentChange(student)
	const handleChildrenPlacementChange = (children_placement: string) => onChildrenPlacementChange(children_placement)
	const handleGiftsChange = (gifts: string) => onGiftsChange(gifts)
	const handleInterestsChange = (interests: string) => onInterestsChange(interests)
	const handleMonthsInterestsChange = (months_interests: string) => onMonthsInterestsChange(months_interests)
	const handlePensionInsuranceChange = (pension_insurance: string) => onPensionInsuranceChange(pension_insurance)
	const handlePrivateInsuranceChange = (private_insurance: string) => onPrivateInsuranceChange(private_insurance)
	const handleContributionsChange = (contributions: string) => onContributionsChange(contributions)
	const handleExamsPaymentChange = (exams_payment: string) => onExamsPaymentChange(exams_payment)
	/*
	const handleNativeSurnameDescriptionChange = () => 
    description === "nativeSurnameDescription" 
      ? onDescriptionChange(undefined)
      : onDescriptionChange("nativeSurnameDescription")
  const handleLeaveChange = () => onDescriptionChange(undefined)
	*/

  /* props */
  const disabilityProps = { label: 'Invalidita', placeholder: 'Počet měsíců', value: disability, size: -1 }
  const extendedDisabilityProps = { label: 'Rozšířená invalidita', placeholder: 'Počet měsíců', value: extended_disability, size: -1 }
  const benefitCardProps = { label: 'ZTP', placeholder: 'Počet měsíců', value: benefit_card, size: -1 }
  const studentProps = { label: 'Student', placeholder: 'Počet měsíců', value: student, size: -1 }
	const childrenPlacementProps = { label: 'Umístění dítěte', placeholder: 'Počet měsíců', value: children_placement, size: -1 }
  const giftsProps = { label: 'Dary', placeholder: 'Částka', value: gifts, size: -1 }
  const interestsProps = { label: 'Úroky', placeholder: 'Částka', value: interests, size: -1 }
  const monthsInterestsProps = { label: 'Úroky', placeholder: 'Počet měsíců', value: months_interests, size: -1 }
  const pensionInsuranceProps = { label: 'Penzijní pojístění', placeholder: 'Částka', value: pension_insurance, size: -1 }
  const privateInsuranceProps = { label: 'Soukromé pojíštění', placeholder: 'Částka', value: private_insurance, size: -1 }
  const contributionsProps = { label: 'Odborové příspěvky', placeholder: 'Částka', value: contributions, size: -1 }
  const examsPaymentProps = { label: 'Úhrada za zkoušky', placeholder: 'Částka', value: exams_payment, size: -1 }
	
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
        <StringInput {...disabilityProps} onValueChange={handleDisabilityChange} />
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
        <StringInput {...extendedDisabilityProps} onValueChange={handleExtendedDisabilityChange} />
      </div>
			<div className="fields">
        <StringInput {...benefitCardProps} onValueChange={handleBenefitCardChange} />
      </div>
			<div className="fields">
        <StringInput {...studentProps} onValueChange={handleStudentChange} />
      </div>
			<div className="fields">
        <StringInput {...childrenPlacementProps} onValueChange={handleChildrenPlacementChange} />
      </div>
			<div className="fields">
        <StringInput {...giftsProps} onValueChange={handleGiftsChange} />
      </div>
			<div className="fields">
        <StringInput {...interestsProps} onValueChange={handleInterestsChange} />
				<StringInput {...monthsInterestsProps} onValueChange={handleMonthsInterestsChange} />
      </div>
			<div className="fields">
        <StringInput {...pensionInsuranceProps} onValueChange={handlePensionInsuranceChange} />
				<StringInput {...privateInsuranceProps} onValueChange={handlePrivateInsuranceChange} />
      </div>
      <div className="fields">
        <StringInput {...contributionsProps} onValueChange={handleContributionsChange} />
      </div>
			<div className="fields">
        <StringInput {...examsPaymentProps} onValueChange={handleExamsPaymentChange} />
      </div>
    </React.Fragment>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchMarkdownProps, {}> = dispatch => ({
	onDescriptionChange: description => dispatch(setDescription(description)),
	onDisabilityChange: disability => dispatch(setMarkdownDisability(disability)),
	onExtendedDisabilityChange: extended_disability => dispatch(setMarkdownExtendedDisability(extended_disability)),
	onBenefitCardChange: benefit_card => dispatch(setMarkdownBenefitCard(benefit_card)),
	onStudentChange: student => dispatch(setMarkdownStudent(student)),
	onChildrenPlacementChange: children_placement => dispatch(setMarkdownChildrenPlacement(children_placement)),
	onGiftsChange: gifts => dispatch(setMarkdownGifts(gifts)),
	onInterestsChange: interests => dispatch(setMarkdownInterests(interests)),
	onMonthsInterestsChange: months_interests => dispatch(setMarkdownMonthsInterests(months_interests)),
	onPensionInsuranceChange: pension_insurance => dispatch(setMarkdownPensionInsurance(pension_insurance)),
	onPrivateInsuranceChange: private_insurance => dispatch(setMarkdownPrivateInsurance(private_insurance)),
	onContributionsChange: contributions => dispatch(setMarkdownContributions(contributions)),
	onExamsPaymentChange: exams_payment => dispatch(setMarkdownExamsPayment(exams_payment)),
})

export default connect(
  undefined,
  mapDispatchToProps
)(MarkdownForm)