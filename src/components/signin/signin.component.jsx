import React from "react";

import { signInWithGoogle } from "../../firebase/firebase.utiles";
import Button from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './signin.styles.scss'
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
      const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already hav an account </h2>
        <span>Sign in with your email and passsword</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className="buttons">
            <Button type="submit">Sign in</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
