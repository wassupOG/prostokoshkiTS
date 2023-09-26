import { Typography } from "@mui/material"
import { instSVG, vkSVG } from "../helpers/icons"

export default function Social() {
  return (
    <>
      <Typography variant="h3">Мы в социальных сетях</Typography>
      <a target="_blank" href="https://vk.com/prosto__koshki" className="svg-icon" aria-label="Наша группа ВКонтакте">
        {vkSVG}
      </a>
      <a target="_blank" href="https://instagram.com/prosto_koshki?igshid=MzRlODBiNWFlZA==" className="svg-icon" aria-label="Наш инстаграм аккаунт">
        {instSVG}
      </a>
    </>
  )
}
