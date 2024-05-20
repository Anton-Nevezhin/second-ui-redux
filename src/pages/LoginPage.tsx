// import React from 'react'

import { Menu } from "@gravity-ui/uikit";
import LoginForm from "../components/loginform/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
      <LoginForm />
    </div>
  );
};

export default LoginPage;
