import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/home";
import { Services } from "./pages/services";
import { ContactMe } from "./pages/contact-me";
import { SignUp } from "./pages/sign-up";
import { Login } from "./pages/login";
import { Footer } from "./pages/Footer"; 
import { Error } from "./pages/Error";
import {Logout} from "./pages/Logout";
import {AdminLayout} from "./layout/Admin-layout";
import {AdminUser} from "./pages/Admin-user";
import {AdminContact} from "./pages/Admin-contact";
import {AdminUpdate} from "./pages/Admin-update";
import {AdminContactUpdate} from"./pages/Admin-contact-update";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout/>}>
             <Route path="users" element={<AdminUser />}/>
             <Route path="contacts" element={<AdminContact />} />
             <Route path="users/:id/edit" element={<AdminUpdate />} />
             <Route path="contacts/:id/edit" element={<AdminContactUpdate />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;