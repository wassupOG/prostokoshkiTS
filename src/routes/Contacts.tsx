import { Accordion, AccordionDetails, AccordionSummary, Link, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { instSVG, vkSVG } from "../helpers/icons"
import { ProfileLink } from "../themes/styledComponents"

export default function Social() {
  return (
    <>
      <Typography textAlign={"center"} variant="h3">
        Наши контакты
      </Typography>

      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>🌐 Наши социальные сети</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ProfileLink target="_blank" href="https://vk.com/prosto__koshki" className="svg-icon" aria-label="Наша группа ВКонтакте">
            Группа ВКонтакте
            {vkSVG}
          </ProfileLink>
          <ProfileLink
            target="_blank"
            href="https://instagram.com/prosto_koshki?igshid=MzRlODBiNWFlZA=="
            className="svg-icon"
            aria-label="Наш инстаграм аккаунт">
            Инстаграм
            {instSVG}
          </ProfileLink>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>💬 Мессенджеры</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <strong>Карина:</strong>{" "}
            <Link target="_blank" href="https://vk.com/id3143498">
              VK
            </Link>
            ,{" "}
            <Link target="_blank" href="https://t.me/+79101364424">
              Telegram
            </Link>
            ,{" "}
            <Link target="_blank" href="https://wa.me/+79101364424">
              WhatsApp
            </Link>
            ,{" "}
            <Link target="_blank" href="viber://chat?number=+79101364424">
              Viber
            </Link>
          </div>
          <div>
            <strong>Юлия:</strong>{" "}
            <Link target="_blank" href="https://vk.com/id17502407">
              VK
            </Link>
            ,{" "}
            <Link target="_blank" href="https://t.me/+79307008009">
              Telegram
            </Link>
            ,{" "}
            <Link target="_blank" href="https://wa.me/+79307008009">
              WhatsApp
            </Link>
            ,{" "}
            <Link target="_blank" href="viber://chat?number=+79307008009">
              Viber
            </Link>
          </div>
          <div>
            <strong>Евгения:</strong>{" "}
            <Link target="_blank" href="https://vk.com/id13058914">
              VK
            </Link>
            ,{" "}
            <Link target="_blank" href="https://t.me/+79040620220">
              Telegram
            </Link>
            ,{" "}
            <Link target="_blank" href="https://wa.me/+79040620220">
              WhatsApp
            </Link>
            ,{" "}
            <Link target="_blank" href="viber://chat?number=+79040620220">
              Viber
            </Link>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>📞 Номера телефонов</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <strong>Карина:</strong> +79101364424
          </div>
          <div>
            <strong>Юлия:</strong> +79307008009
          </div>
          <div>
            <strong>Евгения:</strong> +79040620220
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
