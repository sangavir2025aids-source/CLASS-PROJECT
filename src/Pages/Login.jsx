import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const registerdata = location.state;

  const [logindata, setLogindata] = useState({
    username: "",
    password: "",
  });

  function handlechange(e) {
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value,
    });
  }

  function formsubmit(e) {
    e.preventDefault();

    if (
      registerdata &&
      logindata.username.trim().toLowerCase() ===
        registerdata.name.trim().toLowerCase() &&
      logindata.password === registerdata.password
    ) {
      alert("Login successful!");

      navigate("/dashboard", {
        state: logindata,
      });
    } else {
      alert("Invalid credentials. Please register again.");
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={formsubmit} style={styles.form}>

        <h1 style={styles.heading}>Welcome Back</h1>

        <p style={styles.subtitle}>Login to your account</p>

        <label style={styles.label}>Username</label>

        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          required
          onChange={handlechange}
          style={styles.input}
        />

        <label style={styles.label}>Password</label>

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          onChange={handlechange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #fce4ec, #e1bee7, #d1c4e9)",
    fontFamily: "Georgia, serif",
  },

  form: {
    width: "350px",
    padding: "40px",
    borderRadius: "30px",
    background: "rgba(255,255,255,0.65)",
    boxShadow: "0 10px 30px rgba(142,68,173,0.25)",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.7)",
  },

  heading: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#7b1fa2",
    margin: "0",
    fontFamily: "Georgia, serif",
  },

  subtitle: {
    textAlign: "center",
    color: "#c2185b",
    fontSize: "16px",
    fontStyle: "italic",
    margin: "0 0 10px 0",
  },

  label: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#6a1b9a",
    marginBottom: "-10px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "15px",
    borderRadius: "15px",
    border: "2px solid #ce93d8",
    background: "#fdf4ff",
    outline: "none",
    fontSize: "16px",
    color: "#6a1b9a",
    fontFamily: "Georgia, serif",
  },

  button: {
    padding: "15px",
    borderRadius: "18px",
    border: "none",
    background: "linear-gradient(135deg, #ec4899, #a855f7)",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    fontFamily: "Georgia, serif",
    boxShadow: "0 5px 15px rgba(168,85,247,0.25)",
    marginTop: "10px",
  },
};

export default Login;