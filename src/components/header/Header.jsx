import React  from 'react'
import { styled } from 'styled-components'
import Button from '../UI/button/Button'

const Header = ({onLogout,onUsersClick }) => {
  return (
    <StyledHeader>
      <Button>Expenses</Button>
      <Button onClick={onUsersClick}>Users</Button>
      <Button bgColor={'dark'} onClick={onLogout}>Logout</Button>
    </StyledHeader>
  );
};

const StyledHeader = styled('header')`
	padding: 1rem;
	background-color: #c2b4f2;
	display: flex;
	justify-content: flex-end;
	gap: 1rem;
	min-height: 5rem;
`

export default Header
