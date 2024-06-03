import { FormEvent, useState } from "react";
import "./registerForm.css";
import { Button, TextInput, Text, Alert } from "@gravity-ui/uikit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/paths";
import { changeAlert } from "../../store/alertSlice";
import { useDispatch } from "react-redux";
// import { useSelector, useDispatch } from 'react-redux';
// import { changeAlert } from '../../store/alertSlice';

const RegistеrForm = () => {
  // const stateAlert = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: FormEvent) => {
    // manusouun event ana ts
    e.preventDefault();

    if (!login || !password) {
      dispatch(
        changeAlert({
          theme: "danger",
          title: "Ошибка",
          message: "Заполните оба поля",
          isvisible: true,
        })
      );
      return;
    }
    try {
      //ecu non nozura u napons sanonHet, ompaBasenca sanpoc
      const { data } = await axios.post(
        "http://localhost:3000/auth/registration",
        { usernane: login, password }
      );
      console.log("data register: ", data);
      // localStorage.setTtem("token", data.token);
      navigate(HOME_ROUTE);
      // ecu sanpoc npoxodum, mo data nonywaem KaKoe-mo 3HaYeRIe
      dispatch(
        changeAlert({
          // alert npu ycneupion nonyseruu sanpoca
          theme: "success",
          title: "Поздравляем!",
          message: "Вы успешно зарегистрировались!",
          isVisible: true,
        })
      );
    } catch (error) {
      
      dispatch(
        changeAlert({
          // alert nou ycnewvion nonyyenuu sanpoca
          theme: "danger",
          title: "Ошибка!",
          message: "Пользователь с таким именем уже существует",
          isVisible: true,
        })
      );
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
    </div>
  );
};

export default RegistеrForm;
