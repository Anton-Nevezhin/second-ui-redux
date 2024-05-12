import { routes } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
