// import React from 'react'
import RegistеrForm from "../components/registerform/RegistеrForm";
import { Link } from "react-router-dom";
import { Menu } from "@gravity-ui/uikit";

const RegisterPage = () => {
  return (
    <div>
      {/* <Menu>
        <Menu.Item>
          <Link to="/" className="menu">
            Главная
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/register" className="menu">
            Регистрация
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login" className="menu">
            Логин
          </Link>
        </Menu.Item>
      </Menu> */}
      <RegistеrForm />
    </div>
  );
};

export default RegisterPage;
