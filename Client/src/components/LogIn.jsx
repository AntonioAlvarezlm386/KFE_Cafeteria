import { Card, TextInput, Divider, Button } from "@tremor/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config.js";

const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clave: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SigIn = async () => {
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
        }),
      });

      if (rawResponse.status == 200) {
        const userData = await rawResponse.json();
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(API_URL);
        navigate("/home");
      } else {
        console.error(rawResponse);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="mx-auto w-[20em] mt-[20vh] bg-primary text-background">
      <p>Clave de acceso</p>
      <TextInput
        type="text"
        className="mb-2"
        placeholder=""
        name="clave"
        onChange={handleChange}
        value={formData.clave}
      />

      <p>Contraseña</p>
      <TextInput
        type="password"
        placeholder=""
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
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
