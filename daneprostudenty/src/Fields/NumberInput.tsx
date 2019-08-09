import React from "react"
import { convertNumberSizeToWidth } from "../Utils/Convertors"

type InputProps = {
  label: string
  placeholder: string
  value: number
  size: number
}

type DispatchInputProps = {
  onValueChange: (value: number) => void
  onDescriptionChange?: () => void
  onLeaveChange?: () => void
}

class NumberInput extends React.Component<InputProps & DispatchInputProps> {

  state = {
    current: this.props.value,
    timer: undefined
  }

  handleTriggerValue = () => this.props.onValueChange(this.state.current)

  handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    clearTimeout(this.state.timer)
    
    this.setState({ current: Number(event.target.value) })
    this.setState({ timer: setTimeout(this.handleTriggerValue, 300) })
  }

  render () {

    const width = convertNumberSizeToWidth(this.props.size)

    return (
      <div className={width + " field"}>
        <label>{this.props.label}</label>
        <input 
          type="number" 
          placeholder={this.props.placeholder} 
          value={this.state.current} 
          onClick={this.props.onDescriptionChange} 
          onBlur={this.props.onLeaveChange} 
          onChange={this.handleValueChange} 
        />
      </div>
    )
  }
}

export default NumberInput