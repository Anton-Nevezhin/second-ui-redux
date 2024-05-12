import { Menu, Text } from "@gravity-ui/uikit";
import { Link, useNavigate } from "react-router-dom";
import "./pages.css";
import { REGISTER_ROUTE } from "../utils/paths";
import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const getUser = async () => {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("http://localhost:3000/users/getUser", {
      headers: {
        Authorization: `${token}`, // обратные кавычки
      },
    });
    if (!data) {
      navigate(REGISTER_ROUTE);
    } else {
      console.log("data home: ", data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const token = localStorage.getItem("token");
  return (
    <div>
      <Menu>
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
      </Menu>
      <Text variant="display-1">Главная</Text>
      <span>{token}</span>
    </div>
  );
};

export default HomePage;
