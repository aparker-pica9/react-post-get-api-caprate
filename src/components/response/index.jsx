import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Response extends Component{

  render(){
    const responseData = this.props.responseData
    return(
      <div>
        <h2> {responseData}</h2>
          {/*
            <ul>
             {responseData.map((option, index) =>
               <Options key={index}>
                <li><span><b>Loan Amount:</b> {option.loanamount} </span></li>
                <li><span><b>Debt Rate:</b> {option.debtrate}</span></li>
               </Options>
             )}
          </ul>
          */}
      </div>
    )
  }
}

export default Response;


const Options = styled.div`
  list-style-type: none;
  span{
    display: block;
  }
`;
