import React from "react";
import "./style.scss";

class InputComponent3 extends React.Component {
  state = {
    errors: {
      password: "",
      confirmPassword: "",
    },
    user: {
      password: "",
      confirmPassword: "",
    },
  };

  handleChange = (e) => {
    const { user, errors } = this.state;
    user[e.target.name] = e.target.value;
    errors[e.target.name] = "";
    this.setState({ user });
  };

  handleClick = () => {
    let isValidate = true;
    const { user } = this.state;
    const errors = {
      password: "",
      confirmPassword: "",
    };

    if (!user.password.trim().length) {
      isValidate = false;
      errors.password = "Password is required";
    }
    if (!user.confirmPassword.trim().length) {
      isValidate = false;
      errors.confirmPassword = "Please confirm your password";
    }
    if (user.password.trim().length !== user.confirmPassword.trim().length) {
      isValidate = false;
      errors.confirmPassword = "Your password does not match";
    }
    this.setState({ errors });
    return isValidate;
  };

  render() {
    return (
      <div className="inputComponent3">
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
        />
         {this.state.errors.password?<p className={'P-error'}>{this.state.errors.password}</p>:null}
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={this.handleChange}
        />
        {this.state.errors.confirmPassword?<p className={'P-error'}>{this.state.errors.confirmPassword}</p>:null}
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default InputComponent3;
