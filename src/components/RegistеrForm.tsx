import { useState } from "react";
import { Button, TextInput, Text } from "@gravity-ui/uikit";
import axios from "axios";

const RegistеrForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async () => {
    if (login && password) {
      const { data } = await axios.post(
        "http://localhost:3000/auth/registration"
      );
      console.log(data);
    }
  };

  return (
    <>
      <Text variant="display-1">Регистрация</Text>
      <form onSubmit={onSubmit}>
        <TextInput
          placeholder="Логин"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <TextInput
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button view="normal" size="l">
          Ввод
        </Button>
      </form>
    </>
  );
};

export default RegistеrForm;
