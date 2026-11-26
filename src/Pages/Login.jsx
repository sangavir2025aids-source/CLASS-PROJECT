
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    username: "",
    password: ""
  });

  function handlechange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  const formsubmit = (event) => {
    event.preventDefault();

    const saveddata = JSON.parse(localStorage.getItem("registerdata"));

    if (!saveddata) {
      alert("Please register first");
      navigate("/register");
      return;
    }

    if (
      formdata.username === saveddata.email &&
      formdata.password === saveddata.password
    ) {
      alert("Login success");

      navigate("/dashboard", {
        state: saveddata
      });

    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <form onSubmit={formsubmit}>

        <input
          type="email"
          placeholder="Enter your email"
          required
          name="username"
          value={formdata.username}
          onChange={handlechange}
        />

        <input
          type="password"
          placeholder="Enter your password"
          required
          name="password"
          value={formdata.password}
          onChange={handlechange}
        />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Login;
