import { Menu, Text } from "@gravity-ui/uikit";
import { Link, useNavigate } from "react-router-dom";
import "./pages.css";
import { REGISTER_ROUTE } from "../utils/paths";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user.user)
  const getUser = async () => {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("http://localhost:3000/users/self", {
      headers: {
        Authorization: `
        Bearer ${token}`, // обратные кавычки
      },
    });
    if (!data) {
      navigate(REGISTER_ROUTE);
    } else {
      console.log("data home: ", data);
      dispatch(setUser({ id: data.id, username: data.username }));
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const token = localStorage.getItem("token");
  return (
    <div className="content">
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
      <h3>{user.username}, привет!!!</h3>
    </div>
  );
};

export default HomePage;
