import { useState } from "react";
import FormInput from '../form-input/form-input.component'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../firebase/firebase.utiles";
import Button from "../button/button.component";



const DefaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(DefaultFormFields);
  const { name, email, password, confirmPassword } = formField;

  const resetFormField = () => {
    setFormField(DefaultFormFields);
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("password do not match");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
    await createUserDocumentFromAuth(user, { displayName : name} )
    resetFormField()
    } catch (error) {
      console.log(error);
}
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div>
      <h2>I do not have an account </h2>
      <span>Sign up with your email and passsword</span>{" "}
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          id="name"
          label="name"
          onChange={handleChange}
          value={name}
          required
        />
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
          min="6"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          label="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
          min="6"
        />
        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
