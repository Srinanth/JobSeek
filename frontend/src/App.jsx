import { useEffect } from "react";
import LoadingScreen from './pages/LoadingScreen';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  useEffect(() => {
    const loader = document.getElementById("app-loader");
    if (loader) loader.remove();
  }, []);

  return (
    <LoadingScreen>
      <AppRoutes />
    </LoadingScreen>
  )
}

export default App;
