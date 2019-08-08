import React from "react"
import { convertNumberSizeToWidth } from "../Utils/Convertors"

type InputProps = {
  label: string
  placeholder: string
  value: string
  size: number
}

type DispatchInputProps = {
  onValueChange: (value: string) => void
}

class StringInput extends React.Component<InputProps & DispatchInputProps> {

  state = {
    current: this.props.value,
    timer: undefined
  }

  handleTriggerValue = () => this.props.onValueChange(this.state.current)

  handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    clearTimeout(this.state.timer)
    
    this.setState({ current: event.target.value })
    this.setState({ timer: setTimeout(this.handleTriggerValue, 300) })
  }

  render () {

    const width = convertNumberSizeToWidth(this.props.size)

    return (
      <div className={width + " field"}>
        <label>{this.props.label}</label>
        <input type="text" placeholder={this.props.placeholder} value={this.state.current} onChange={this.handleValueChange} />
      </div>
    )
  }
}

export default StringInput
