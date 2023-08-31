import { Link } from "react-router-dom"
import { helpIcon, instSVG, vkSVG } from "../helpers/icons"

export default function Navbar() {
  return (
    <>
      <nav>
        <Link className="logo-link" to="/">
          <img className="logo" src="/images/logos/logo100px.jpg" alt="Логотип" />
        </Link>
        <Link className="svg-icon" to="/help" aria-label="Помощь приюту">
          {helpIcon}
        </Link>
        <a target="_blank" href="https://vk.com/prosto__koshki" className="svg-icon" aria-label="Наша группа ВКонтакте">
          {vkSVG}
        </a>
        <a target="_blank" href="https://instagram.com/prosto_koshki?igshid=MzRlODBiNWFlZA==" className="svg-icon" aria-label="Наш инстаграм аккаунт">
          {instSVG}
        </a>
      </nav>
    </>
  )
}
