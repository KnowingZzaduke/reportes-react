import { NavbarA } from "../../components/admin/NavarA";
import { MainA } from "../../components/admin/MainA";
import { FooterA } from "../../components/admin/FooterA";
import {useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { functions as fc } from "../../data/request";
import Cookies from 'js-cookie';
import {HOC} from '../../components/validation/Hoc';



function Admin() {

  const navigate = useNavigate();
  const SESSION = Cookies.get("dyzam-app");
  //console.log(SESSION == undefined);
  if(SESSION == undefined){
    
    navigate("/signin");
  }else{

    const SESSIONDECRYPT = fc.decryptdata(SESSION);
  
    if(SESSIONDECRYPT.level !== 0){
      navigate("/usuarios");
    }
    if(SESSIONDECRYPT.user == null){
      Swal.fire({
        title: "Error",
        text: "Permisos Denegados",
        icon: "error",
      });
      Cookies.remove('dyzam-app');
      navigate("/signin");
    }
  }
  return (
    <>
      <NavbarA />
      <MainA />
      <FooterA />
    </>
  );
}

export default HOC(Admin);
