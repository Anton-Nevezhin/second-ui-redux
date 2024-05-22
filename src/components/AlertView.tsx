import { Alert } from "@gravity-ui/uikit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AlertView = () => {
  const alert = useSelector((state) => state.alert.alert);
  const [isVisible, setIsVisible] = useState(false);
  console.log(alert);
  useEffect(() => { //при изменении alert он рендерится, потом опять скрывается
    if (alert.title) setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timeout); // очистка эффекта, чтобы setTimeout не вызывался случайно еще раз
  }, [alert]);

  return (
    <>
      {isVisible ? (
        <Alert
          theme={alert.theme}
          title={alert.title}
          message={alert.message}
        />
      ) : null}
    </>
  );
};

export default AlertView;
