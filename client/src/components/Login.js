import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

const credentials = {
  username: "",
  password: "",
};



const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [item, setItem] = useState(credentials)

  const handleChange = e => {
    setItem({
            ...item, [e.target.name]: e.target.value
    })
}

  const thelogin = e => {
    e.preventDefault()
    axiosWithAuth()
    .post("/api/login", item)
    .then(res=> {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.payload))
        props.history.push("/colors");
    })
    .catch(err => {
        console.log(err)
    })
}

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
            <form onSubmit={thelogin}>
              <input
                type="text"
                name="username"
                placeholder= "Username"
                value={item.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder = "Password"
                value={item.password}
                onChange={handleChange}
              />
              <button type="submit">Log in</button>
            </form>
          </div>
    </>
  );
};

export default Login;
