import '../src/assets/styles/index.scss';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
