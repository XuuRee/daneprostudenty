import React from 'react'
import { BankAccount } from '../../State/State'
import StringInput from '../../Fields/StringInput'
import { connect, MapDispatchToProps } from 'react-redux'
import { setAccountNumber, setAccountCode, setBankName } from '../../Actions/FormActions'
import { bankAccountVerification } from '../../Utils/Verifications'
import { convertBankAccountProperties } from '../../Utils/Convertors'

type AccountProps = BankAccount

type DispatchAccountProps = {
	onAccountNumberChange: (number: string) => void
	onAccountCodeChange: (code: string) => void
	onBankNameChange: (name: string) => void
}

class AccountForm extends React.Component<AccountProps & DispatchAccountProps> {

  state = {
		bank_account: '',
		error: ''
	}
	
	handleBankValueChange = (value: string) => {
		this.setState({ bank_account: value })

		// validace zadaneho vstupu
		const validation = bankAccountVerification(this.state.bank_account)

		if (validation) {
			this.setState({ error: 'None' })

			const { number, code, name } = convertBankAccountProperties(this.state.bank_account)

			this.props.onAccountNumberChange(number)
			this.props.onAccountCodeChange(code)
			this.props.onBankNameChange(name)
		} else {
			this.setState({ error: 'ERROR-01' })
		}
	}

	render() {

		const bankAccountProps = { label: 'Bankovní účet', placeholder: '180535-32001782/3030', value: this.state.bank_account, size: 8 }

		const accountDescription = 
    	<div className="ui info message">
      	<div className="header">K čemu?</div>
      	<p>V případě přeplatku se ti přepošlou peníze na tento účet.</p>
    	</div>

		const error01Description = 
			<div className="ui negative message">
				<div className="header">Pozor!</div>
				<p>Ops, asi jsi zadal účet ve špatném tvaru. :-(</p>
			</div>

		return ( 
			<React.Fragment>
				{accountDescription}
				<StringInput {...bankAccountProps} onValueChange={this.handleBankValueChange} />
				{this.state.error === 'ERROR-01' && error01Description}
			</React.Fragment>
		)
	}
}


const mapDispatchToProps: MapDispatchToProps<DispatchAccountProps, {}> = dispatch => ({
	onAccountNumberChange: number => dispatch(setAccountNumber(number)),
	onAccountCodeChange: code => dispatch(setAccountCode(code)),
	onBankNameChange: code => dispatch(setBankName(code))
})

export default connect(
  undefined,
  mapDispatchToProps
)(AccountForm)