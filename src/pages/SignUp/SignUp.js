import './SignUp.scss';
import NameInput from './NameInput/NameInput';
import PasswordInput from './PasswordInput/PasswordInput';
import PhoneNumInput from './PhoneNumInput/PhoneNumInput';
import SignUpButton from './SignUpButton/SignUpButton';
import EmailInput from './EmailInput/EmailInput';
import { useState } from 'react';

const SignUp = () => {
  const [signUpinput, setSignUpinput] = useState({
    password: '',
    phoneNumber: '',
    name: '',
  });

  const [validStartList, setValidStartList] = useState({
    password: false,
    phoneNumber: false,
    name: false,
  });

  function inputVaildMsg(type, validReg, emptyMsg, errorMsg) {
    if (validStartList[type] === true) {
      return signUpinput[type] === ''
        ? emptyMsg
        : !validReg.test(signUpinput[type])
        ? errorMsg
        : '';
    }
  }

  const inputUpdate = e => {
    setSignUpinput({
      ...signUpinput,
      [e.target.name]: e.target.value,
    });
  };

  const validStartUpdate = e => {
    setValidStartList({
      ...validStartList,
      [e.target.name]: true,
    });
  };

  return (
    <div className="signUp">
      <div className="signUpContainer">
        <div className="signUpTitle">
          <div>처음이시군요</div>
          <span className="fontBold">가입을 진행합니다.</span>
        </div>
        <form className="singUpBox">
          <EmailInput />
          <PasswordInput
            inputUpdate={inputUpdate}
            signUpinput={signUpinput}
            validStartList={validStartList}
            setValidStartList={setValidStartList}
            inputVaildMsg={inputVaildMsg}
            validStartUpdate={validStartUpdate}
          />
          <PhoneNumInput
            inputUpdate={inputUpdate}
            signUpinput={signUpinput}
            validStartList={validStartList}
            setValidStartList={setValidStartList}
            inputVaildMsg={inputVaildMsg}
            validStartUpdate={validStartUpdate}
          />
          <NameInput
            inputUpdate={inputUpdate}
            signUpinput={signUpinput}
            validStartList={validStartList}
            setValidStartList={setValidStartList}
            inputVaildMsg={inputVaildMsg}
            validStartUpdate={validStartUpdate}
          />
          <SignUpButton {...signUpinput} />
        </form>
        <div>위즐리컴퍼니 통합 회원으로 진행됩니다.</div>
      </div>
    </div>
  );
};
export default SignUp;
