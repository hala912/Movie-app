// App.tsx
import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./common/navbar/navbar";
import AppRoutes from "./router/router";

function App() {
  const location = useLocation();
  const hideNavbarOn = ["/login", "/signup"];
  const showNavbar = !hideNavbarOn.includes(location.pathname);

  return (
    <div className="app-layout">
      {showNavbar && <Navbar />}
      <div className="body-layout">
        <main className="content">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;