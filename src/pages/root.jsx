import React, { Component } from 'react';
import styled from 'styled-components';

import UserInfo from '../components/user-info';
import Response from '../components/response'


const title = 'Greystone Code Challenge';

class Root extends Component {
  render() {
    return(
      <RootWrap>
        {title}
        <UserInfo />
      </RootWrap>
    );
  }
}

export default Root;


const RootWrap = styled.div`
  padding: 1em;
`;
