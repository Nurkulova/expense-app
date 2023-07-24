import React, { useState } from 'react';
import { styled } from 'styled-components';
import Card from '../UI/card/Card';
import FormInput from '../UI/input/FormInput';
import Button from '../UI/button/Button';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(
      event.target.value.includes('@') || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)
    );
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPasswordValid(event.target.value.length > 8);
  };

  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      onLogin();
    }
  };

  return (
    <StyledCard>
      <StyledForm onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          containerClassName="field"
          value={email}
          onChange={handleEmailChange}
          error={!isEmailValid}
        />
        <FormInput
          label="Password"
          containerClassName="field"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={!isPasswordValid}
        />
        <StyledButton type="submit" disabled={!isFormValid}>
          Login
        </StyledButton>
      </StyledForm>
    </StyledCard>
  );
};


const StyledCard = styled(Card)`
  width: 50rem;
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  margin-top: 5rem;
`;

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .field {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .field > label {
    flex: 1;
  }
  .field > input {
    flex: 5;
	border: 2px solid ${({ error }) => (error ? 'red' : 'black')};
  }
`;

const StyledButton = styled(Button)`
  align-self: center;
`;


export default Login;
