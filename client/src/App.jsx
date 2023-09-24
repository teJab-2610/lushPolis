import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from './routes/Routing'
import { useEffect } from "react";
import { logoutAllTabs } from "./auth/auth";
function App() {
  useEffect(() => {
    logoutAllTabs()
   }, [])
  return (
    <>
      <Routing/>
    </>
  );
}
export default App
