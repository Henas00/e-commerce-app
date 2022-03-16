import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Authentication = () => {
  const [signUpForm, setSignUpForm] = useState(false)
  const toggleSignUp = () => {
    setSignUpForm(prev => !prev)
  }
  return (
    <div className="authentication">
      {!signUpForm && (
        <>
          <SignInForm />
          <p>
            Not registered yet?
            <span onClick={toggleSignUp}>Create an Account</span>
          </p>
        </>
      )}
      {signUpForm && (
        <>
          <SignUpForm />
          <p>
            <span onClick={toggleSignUp}>I have an account!</span>
          </p>
        </>
      )}
    </div>
  );
};
 
export default Authentication;