import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from '../components/Footer'

function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default RootLayout;
