import { Card, TextInput, Divider, Button } from "@tremor/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clave: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SigIn = async(e)=> {
    try {
      const rawResponse = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: formData.clave,
          password: formData.password,
        })
      });

      if(rawResponse.status == 200){
        const userData = await rawResponse.json()
        localStorage.setItem("token", userData.token)
        localStorage.setItem("username", userData.username)
        localStorage.setItem("role", userData.role)
        localStorage.setItem("key", userData.access_key)

        navigate("/home")
      } else {
        console.error(rawResponse)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Card className="mx-auto w-[20em] mt-[20vh] bg-primary text-background">
      <p>Clave de acceso</p>
      <TextInput type="text" className="mb-2" placeholder="" name="clave" onChange={handleChange} value={formData.clave}/>

      <p>Contraseña</p>
      <TextInput type="password" placeholder="" name="password" onChange={handleChange} value={formData.password}/>
      <Divider />
      <div className="text-center">
        <Button
          variant="primary"
          className="bg-background text-black hover:bg-secondary"
          onClick={SigIn}
        >
        Iniciar sesión
        </Button>
      </div>
    </Card>
  );
};

export default LogIn;
