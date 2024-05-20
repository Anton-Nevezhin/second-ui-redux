// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";
// import {InfoButtons} from './components/InfoButtons';
// import {Wrapper} from './components/Wrapper';

import MainLayout from "./components/layouts/mainLayout";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
};

export default App;
