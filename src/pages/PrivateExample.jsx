import { useEffect, useState } from "react"
// import axios from "axios"
import service from "../services/config.services"

function PrivateExample() {

  const [ dataPrivada, setDataPrivada ] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {

    try {
      // const storedToken = localStorage.getItem("authToken")
      // const response = await axios.get("http://localhost:5005/api/auth/ejemplo-ruta-privada", { headers: { authorization: `Bearer ${storedToken}` } })
      const response = await service.get("/auth/ejemplo-ruta-privada")

      // ejemplo de llamada a rutas de admin. En el payload del token debe indicar el role del usuario
      // const response = await service.get("/auth/ejemplo-ruta-admin")
      
      console.log(response)
      setDataPrivada(response.data)

    } catch (error) {
      console.log(error) // navigate o algo
    }

  }


  if (dataPrivada === null) {
    return <h3>...buscando</h3>
  }


  return (
    <div>
      
      <h3>Ejemplo de página privada</h3>
      <p>Solo usuarios que hayan validado credenciales deberian poder acceder</p>

      {dataPrivada.data}

    </div>
  )
}

export default PrivateExample