import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: user.email,
      password: user.password,
    },
  });
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <main className="h-full flex justify-center items-center">
        <section className="glass flex flex-col lg:flex-row">
          <div className="games flex-3">
            <div className="status">
              <h1>Sign In</h1>
            </div>
            <div className="main-body">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => onChange(e)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => onChange(e)}
              />

              <button onClick={(e) => onSubmit(e)}>Login</button>
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
};

export default Login;
