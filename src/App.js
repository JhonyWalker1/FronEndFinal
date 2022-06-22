import Router from "./router";
import { UserProvider } from "./Context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';

// Archivo que contiene mi router
const App = () => {
  return (
    <UserProvider>
      <div>
        <Router />
      </div>
    </UserProvider>
  );
};



export default App;
