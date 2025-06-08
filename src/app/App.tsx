import "./App.css";
import "@fontsource/poppins/index.css";
// import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import AppLayout from "src/layout/app-layout";
function App() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default App;
