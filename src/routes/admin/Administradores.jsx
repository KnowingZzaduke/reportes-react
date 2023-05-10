import { NavbarA } from "../../components/admin/NavarA";
import { MainA } from "../../components/admin/MainA";
import { FooterA } from "../../components/admin/FooterA";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom/dist";
export function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/administradores") {
      navigate("/administradores/bienvenida");
    }
  }, [location]);
  return (
    <>
      <NavbarA />
      <MainA />
      <FooterA />
    </>
  );
}
