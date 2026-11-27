import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/formschema/registerschema";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerschema),
  });

  function onSubmit(data) {
    console.log(data);
    alert("Registration successful");
    navigate("/", {
      state: data,
    });
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>

        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
          style={styles.input}
        />
        {errors.name && <p style={styles.error}>{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          style={styles.input}
        />
        {errors.password && (
          <p style={styles.error}>{errors.password.message}</p>
        )}

        <input
          type="number"
          placeholder="Enter your age"
          {...register("age")}
          style={styles.input}
        />
        {errors.age && <p style={styles.error}>{errors.age.message}</p>}

        <button type="submit" style={styles.button}>
          Submit
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
    width: "320px",
    padding: "35px",
    borderRadius: "25px",
    background: "rgba(255,255,255,0.45)",
    boxShadow: "0 8px 25px rgba(126,87,194,0.25)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backdropFilter: "blur(10px)",
  },

  input: {
    padding: "18px",
    borderRadius: "25px",
    border: "2px solid #ba68c8",
    background: "rgba(255,255,255,0.4)",
    outline: "none",
    fontSize: "16px",
    color: "#6a1b9a",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "Georgia, serif",
  },

  button: {
    padding: "16px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(135deg, #ba68c8, #8e44ad, #7b1fa2)",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    fontFamily: "Georgia, serif",
    boxShadow: "0 4px 12px rgba(142,68,173,0.3)",
  },

  error: {
    color: "#ad1457",
    fontSize: "13px",
    margin: "-15px 0 0 5px",
  },
};

export default Register;