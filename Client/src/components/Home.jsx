import { Divider, Card } from "@tremor/react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import avatar from '../assets/avatar.jpg'

const username = localStorage.getItem('username')
const role = localStorage.getItem('role')
const token = localStorage.getItem("token")

async function getProducts(){
  try {
    const rawResponse = await fetch("http://localhost:3000/api/products",{
      method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": token
        }
    })

    const products = await rawResponse.json()
    localStorage.setItem("products", JSON.stringify(products))

  } catch (error) {
    console.error(error)
  }
}

const Home = () => {
  const navigate = useNavigate()
  getProducts()

  const logOut = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("role")
    localStorage.removeItem("products")
    localStorage.removeItem("key")
    navigate("/")
  }

  return (
    <div className="max-container flex h-screen">
      <div className="w-[20em] h-full bg-primary">
        <h1 className="text-center my-6 text-secondary text-2xl">KFE Cafeteria</h1>
        <Card className=" w-[80%] text-center mx-auto">
          <img
            src={avatar}
            alt="avatar"
            className="mx-auto w-[12em]"
          />
          <h3>{username}</h3>
          <p>{role}</p>
        </Card>
        <Divider className="w-[80%]"/>
        <nav className="text-center text-background">
          <ul>
            <li className="my-5 hover:text-secondary hover:bg-accent">
              <Link to={'sales/'}>Punto de venta</Link>
            </li>
            <li className="my-5 hover:text-secondary hover:bg-accent">
              <Link to={'administracion/'}>Administración</Link>
            </li>
            <li className="my-5 hover:text-secondary hover:bg-accent">
              <Link to={'gerencia/'}>Gerencia</Link>
            </li>
          </ul>
        </nav>
        <p className="text-secondary text-center mb-0 hover:bg-divider p-2" onClick={logOut} >Cerrar sesión</p>
      </div>
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
