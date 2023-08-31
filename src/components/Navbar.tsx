import { Link } from "react-router-dom";
import { helpIcon, instSVG, vkSVG } from "../helpers/icons";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link className="logo-link" to="/">
          <img className="logo" src="/images/logos/logo50px.jpg" alt="Логотип" />
        </Link>
        <Link className="svg-icon" to="/help">
          {helpIcon}
        </Link>
        <a target="_blank" href="https://vk.com/prosto__koshki" className="svg-icon">
          {vkSVG}
        </a>
        <a target="_blank" href="https://instagram.com/prosto_koshki?igshid=MzRlODBiNWFlZA==" className="svg-icon">
          {instSVG}
        </a>
      </nav>
    </>
  );
}
