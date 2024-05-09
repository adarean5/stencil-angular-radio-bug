import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'cust-radio',
  shadow: true,
})
export class CustomRadioComponent {
  @Prop() label: string;
  @Prop() name: string;
  @Prop() value: string;
  @Prop({ reflect: true }) checked: boolean = false;
  @Prop() disabled: boolean = false;

  @Event({
    eventName: 'myChange',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  myChange: EventEmitter<{
    value: string;
  }>;

  handleChange = () => {
    this.myChange.emit({
      value: this.value,
    });
  };

  render() {
    return (
      <label>
        <input
          type="radio"
          name={this.name}
          value={this.value}
          checked={this.checked}
          disabled={this.disabled}
          onChange={() => this.handleChange()}
        />
        {this.label}
      </label>
    );
  }
}
