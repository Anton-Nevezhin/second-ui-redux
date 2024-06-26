import { FormEvent, useState } from "react";
import { Button, TextInput, Text, Alert } from "@gravity-ui/uikit";
import "./loginForm.css";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/paths";
import { useDispatch } from "react-redux";

import axios from "axios";
import { changeAlert } from "../../store/alertSlice";
// import { HOME_ROUTE } from "../../utils/paths";
// import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  // const [alert, setAlert] = useState<{
  //   // дальше типизация для ts
  //   theme: "success" | "danger" | "normal" | "info";
  //   title: string;
  //   message: string;
  //   isVisible: boolean;
  // }>({
  //   theme: "success" || "danger",
  //   title: "",
  //   message: "",
  //   isVisible: false,
  // });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (login && password) {
      const { data } = await axios.post("http://localhost:3000/auth/login", {
        username: login,
        password,
      });
      console.log("data login: ", data);
      if (data) {
        console.log("data register: ", data);
        localStorage.setItem("token", data.token);
        navigate(HOME_ROUTE);
        // если запрос проходит, то data получает какое-то значение
        dispatch(
          changeAlert({
            // alert при успешном получении запроса
            theme: "success",
            title: "Успешно",
            message: "Успешный вход",
            isVisible: true,
          })
        );

        // dispatch(changeAlert({
        //   // alert при успешном получении запроса
        //   theme: "success",
        //   title: "Успешно",
        //   message: "Успешный вход",
        //   isVisible: true,
        // }))
      }
    } else {
      dispatch(
        changeAlert({
          // если хотя бы одно поле пустое, выдается alert с ошибкой
          theme: "danger",
          title: "Ошибка",
          message: "Заполните оба поля",
          isVisible: true,
        })
      );
    }
  };

  return (
    <div className="content">
      <Text variant="display-1">Вход</Text>
      <form>
        <TextInput
          className="input"
          placeholder="Логин"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <TextInput
          className="input"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button
          className="btn"
          type="submit"
          view="normal"
          size="l"
          onClick={onSubmit}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
