import React, { Component } from 'react';
import Title from './Title';
import './PersonalForm.css';

export class PersonalForm extends Component {
  handleChangeForm = evt => {
    const { name, value } = evt.target;
    this.props.onChangeForm(name, value);
  };

  render() {
    return (
      <form
        className="personal-form"
        onChange={this.handleChangeForm}
      >
        <Title>Персональная информация</Title>
        <input type="text" name="firstName" value={this.props.firstName} />
        <input type="text" name="lastName" value={this.props.lastName} />
        <input type="email" name="email" value={this.props.email} />
      </form>
    );
  }
}

export default PersonalForm;
