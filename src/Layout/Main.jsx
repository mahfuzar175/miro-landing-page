import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import Container from "../Pages/Shared/Container";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Outlet></Outlet>
      </Container>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
