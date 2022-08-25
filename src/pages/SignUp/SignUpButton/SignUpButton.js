import React from 'react';
import API from '../../../config';
import './SignUpButton.scss';
import { useNavigate } from 'react-router';

const SignUpButton = ({
  email,
  password,
  name,
  phoneNumber,
  validManagement,
}) => {
  const navigate = useNavigate();
  const isValidAllPass = Object.values(validManagement).every(
    boolean => boolean === true
  );

  const signUpValid = e => {
    e.preventDefault();
    fetch(API.signUp, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        phoneNumber: phoneNumber.replace(/\-/g, ''),
      }),
    })
      .then(response => response.json())
      .then(validData => {
        if (validData.message === 'success') {
          navigate('/login');
        }
      });
  };

  return (
    <button
      className={`loginBtn ${isValidAllPass}`}
      disabled={!isValidAllPass}
      onClick={signUpValid}
    >
      가입완료
    </button>
  );
};

export default SignUpButton;
