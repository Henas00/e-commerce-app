import { useState } from "react";
import {
  signInWithGoogle,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../firebase/firebase.utiles";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const DefaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(DefaultFormFields);
  const { email, password } = formField;

  const resetFormField = () => {
    setFormField(DefaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("email not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormField({ ...formField, [name]: value });
  };
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account </h2>
      <span>Sign in with your email and passsword</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          id="email"
          label="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          type="password"
          name="password"
          id="password"
          label="password"
          onChange={handleChange}
          value={password}
          required
        />
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={logGoogleUser} buttonType="google">
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
