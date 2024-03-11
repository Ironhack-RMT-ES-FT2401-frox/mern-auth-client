import { useState, useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate()

  const { darkTheme } = useContext(ThemeContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();
    // console.log(email, password)

    const newUser = {
      email,
      password
    }

    // ... contactar al backend para registrar al usuario aqui
    try {
      
      await axios.post("http://localhost:5005/api/auth/signup", newUser)

      navigate("/login")

    } catch (error) {
      let errorCode = error.response.status
      let errorMessage = error.response.data.message
      if (errorCode === 400) {
        setErrorMessage(errorMessage)
      } else {
        console.log(error) // aqui deberiamos redireccionar a /error
      }
    }

  };

  return (
    <div>

      <h1>Formulario de Registro</h1>
    
      <form onSubmit={handleSignup}>

        <label>Correo Electronico:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        <p>{errorMessage}</p>

        <button className={darkTheme === true ? "dark-btn" : "light-btn"} type="submit">Registrar</button>
      </form>
      
    </div>
  );
}

export default Signup;
