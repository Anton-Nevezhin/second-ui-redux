import { FormEvent, useState } from "react";
import "./registerForm.css";
import { Button, TextInput, Text, Alert } from "@gravity-ui/uikit";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { HOME_ROUTE } from "../../utils/paths";
// import { useSelector, useDispatch } from 'react-redux';
// import { changeAlert } from '../../store/alertSlice';

const RegistеrForm = () => {

  // const stateAlert = useSelector((state) => state.alert);

  // const dispatch = useDispatch();

  // const navigate = useNavigate()
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState<{
    // дальше типизация для ts
    theme: "success" | "danger" | "normal" | "info";
    title: string;
    message: string;
    isVisible: boolean;
  }>({
    theme: "success" || "danger",
    title: "",
    message: "",
    isVisible: false,
  });

  const onSubmit = async (e: FormEvent) => {
    // типизация event для ts
    e.preventDefault();
    if (login && password) {
      //если поля логина и пароля заполнены, отправляется запрос
      const { data } = await axios.post(
        "http://localhost:3000/auth/registration",
        { username: login, password }
      );
      if (data) {
        console.log('data register: ', data)
        localStorage.setItem('token', data.token)
        // navigate(HOME_ROUTE)
        // если запрос проходит, то data получает какое-то значение
        setAlert({
          // alert при успешном получении запроса
          theme: "success",
          title: "Поздравляем!",
          message: "Вы успешно зарегистрировались",
          isVisible: true,
        });

        // dispatch(changeAlert({
        //   // alert при успешном получении запроса
        //   theme: "success",
        //   title: "Успешно",
        //   message: "Успешный вход",
        //   isVisible: true,
        // }))

      }} else {
        setAlert({
          // если хотя бы одно поле пустое, выдается alert с ошибкой
          theme: "danger",
          title: "Ошибка",
          message: "Заполните оба поля",
          isVisible: true,
        });
      }
    
  };

  return (
    <div className="content">
      <Text variant="display-1">Регистрация</Text>
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
          className="button"
          type="submit"
          view="normal"
          size="l"
          onClick={onSubmit}
        >
          Ввод
        </Button>
      </form>
      {alert.isVisible && (
        <Alert
          theme={alert.theme}
          title={alert.title}
          message={alert.message}
        />
      )}
    </div>
  );
};

export default RegistеrForm;
