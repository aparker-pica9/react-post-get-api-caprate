import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Response from '../response'

class UserInfo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      street: '',
      city: '',
      state: '',
      county: '',
      zip: '',
      monthlyrent: '',
      unitnumber: '',
      vacancy: '',
      bedrooms: '',
      bathrooms: '',
      annualtotal: '',
      marketing: '',
      taxes: '',
      insurance: '',
      repairs: '',
      administration: '',
      payroll: '',
      utility: '',
      management: '',
      capitalizationrate: '',
      response: false,
      responseData: [ 'Response Data']


    };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { street, city, state, county, zip, monthlyrent, unitnumber, vacancy, bedrooms, annualtotal, marketing, taxes, insurance, repairs, administration, payroll, utility, management, capitalizationrate } = this.state;

    let income = () => {
        return parseInt(monthlyrent) * 12
    };
    let expense = () => {
        return parseInt(taxes) + parseInt(marketing) + parseInt(insurance) + parseInt(repairs) + parseInt(administration) + parseInt(payroll) + parseInt(utility) + parseInt(management)
    };
    let noi = () => {
      return income() - expense()
    };
    let totalIncome = income();
    let totalExpense = expense();
    let totalNoi = noi();
    let postData = {
        income  : totalIncome,
        expenses: totalExpense,
        rate    : capitalizationrate,
        noi     : totalNoi,
        address : {
         street: street,
         city  : city,
         state : state,
         county: county,
         zip   : zip
        }
    }
    axios({
          method:'post',
          dataType: 'json',
          url:'https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec',
          headers: {
            'Content-Type': 'application/json',
          },
          data: postData
        })
        .then(res => {
          const responseData = res.data;
          this.setState({ lists: lists, response: true });
        })
        .catch(function (error) {
          console.log(error);
        });
    console.log(postData);
  }

  render() {

    return(
      <div>
        <FormWrap>
          <h2>User Info</h2>
          <form onSubmit={this.onSubmit}>
            <p>Address</p>
            <label>Street</label>
            <input type="text" name="street"  onChange={this.handleChange} required/>

            <label>City</label>
            <input type="text" name="city"  onChange={this.handleChange} required/>

            <label>State</label>
            <input type="text" name="state"  onChange={this.handleChange} required/>

            <label>County</label>
            <input type="text" name="county"  onChange={this.handleChange} required/>

            <label>Zip</label>
            <input type="text" name="zip"  onChange={this.handleChange} required/>

            <p>Rent Roll</p>

            <label>Monthly Rent</label>
            <input type="text" name="monthlyrent" onChange={this.handleChange} required/>

            <label>Unit Number</label>
            <input type="text" name="unitnumber" onChange={this.handleChange}/>

            <label>Vacancy</label>
            <input type="text" name="vacancy" onChange={this.handleChange}/>

            <label>Bedrooms</label>
            <input type="text" name="bedrooms" onChange={this.handleChange}/>

            <label>Bathrooms</label>
            <input type="text" name="bathrooms" onChange={this.handleChange}/>

            <label>Annual Total</label>
            <input type="text" name="annualtotal" onChange={this.handleChange}/>

            <p>Expense Items</p>

            <label>Marketing</label>
            <input type="text" name="marketing" onChange={this.handleChange} required/>

            <label>Taxes</label>
            <input type="text" name="taxes" onChange={this.handleChange} required/>

            <label>Insurance</label>
            <input type="text" name="insurance" onChange={this.handleChange} required/>

            <label>Repairs</label>
            <input type="text" name="repairs" onChange={this.handleChange} required/>

            <label>Administration</label>
            <input type="text" name="administration" onChange={this.handleChange} required/>

            <label>Payroll</label>
            <input type="text" name="payroll" onChange={this.handleChange} required/>

            <label>Utility</label>
            <input type="text" name="utility" onChange={this.handleChange} required/>

            <label>Management</label>
            <input type="text" name="management" onChange={this.handleChange} required/>

            <p>Capitalization Rate</p>

            <label>Capitalization Rate</label>
            <input type="text" name="capitalizationrate" onChange={this.handleChange} required/>

            <button type="submit">Submit</button>
          </form>
        </FormWrap>
        <div>
          {/*
            { this.state.response === 'true' ? (
              <Response
                responseData = {this.state.responseData}
              />
            ) : null }
          */}

            <Response
              responseData = {this.state.responseData}
            />
        </div>

      </div>
    );
  }
}

export default UserInfo;

const FormWrap = styled.div`
  padding: 1em;
  label, button {
    display: block;
    margin: 4px 0;
  }
  input {
    margin: 0,0,6px 0;
  }
`;
