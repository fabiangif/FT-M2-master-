import React from "react";

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }
  return errors;
}

export default function Form() {
  const [input, setInput] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState("");

  const handleInputChangue = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSubmit = function (e) {
    e.preventDefault();
    setInput({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>
          {errors.username}
          <br />
        </span>
        <label>Username:</label>
        <input
          className={errors.username && 'danger'}
          type="text"
          name="username"
          onChange={handleInputChangue}
          value={input.username}
        />
      </div>
      <div>
        <label>Pasword:</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChangue}
          value={input.password}
        />
      </div>
      <div>
        <input type="submit" name="submit" />
      </div>
    </form>
  );
}
