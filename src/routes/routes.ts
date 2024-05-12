import Home from '../pages/Home'
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { HOME_ROUTE, REGISTER_ROUTE, LOGIN_ROUTE } from "../utils/paths";

export const routes = [
  { path: HOME_ROUTE, Page: Home },
  { path: REGISTER_ROUTE, Page: RegisterPage },
  { path: LOGIN_ROUTE, Page: LoginPage },
];
