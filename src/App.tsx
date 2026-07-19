import "./App.css";
import Navbar from "./common/navbar/navbar";
import AppRoutes from "./router/router";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="body-layout">
        <main className="content">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
