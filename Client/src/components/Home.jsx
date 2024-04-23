import { Divider, Card } from "@tremor/react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { getProducts } from "../libs/api";
import avatar from '../assets/avatar.jpg'

const userData = JSON.parse(localStorage.getItem("userData"))

const Home = () => {
  const navigate = useNavigate()
  const logOut = ()=>{
    localStorage.removeItem("userData")
    localStorage.removeItem("products")
    navigate("/")
  }
  getProducts('products/')

  return (
    <div className="max-container h-screen flex">
      <div className="w-[20em] h-full bg-primary">
        <h1 className="text-center my-6 text-secondary text-2xl">KFE Cafeteria</h1>
        <Card className=" w-[80%] text-center mx-auto">
          <img
            src={avatar}
            alt="avatar"
            className="mx-auto w-[12em]"
          />
          <h3>{userData.username}</h3>
          <p>{userData.role}</p>
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
      <div className="h-full w-full overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
