import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionDetails, AccordionSummary, IconButton, Tooltip, Typography } from "@mui/material"

interface NavigationArrowsProps {
  disableLeftArrow: boolean
  disableRightArrow: boolean
  prevCat: () => void
  nextCat: () => void
}

interface HeartIconProfileProps {
  isFavorite: boolean
  onClick: () => void
}

interface CatPositionProps {
  index: number
  arrayLength: number
}

export function HeartIconProfile({ isFavorite, onClick }: HeartIconProfileProps) {
  return (
    <div className="fav-icon-profile">
      <Tooltip title={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}>
        <IconButton onClick={onClick}>{isFavorite ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="large" />}</IconButton>
      </Tooltip>
    </div>
  )
}

export function NavigationArrows({ disableLeftArrow, disableRightArrow, prevCat, nextCat }: NavigationArrowsProps) {
  return (
    <>
      <div className="arrow-left">
        <IconButton disabled={disableLeftArrow} onClick={prevCat} color="secondary" aria-label="Стрелка назад">
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      <div className="arrow-right">
        <IconButton disabled={disableRightArrow} onClick={nextCat} color="secondary" aria-label="Стрелка вперед">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </>
  )
}

export function CatPosition({ index, arrayLength }: CatPositionProps) {
  return <div className="cat-position">{`${index + 1} / ${arrayLength}`}</div>
}

export function GetCatHomeAccordion() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>🐱🏠 По вопросам укотовления</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <b>Карина: </b>
          <a className="accordion-link" target="_blank" href="https://vk.com/id3143498">
            ВКонтакте🔗
          </a>
          <a className="accordion-link" target="_blank" href="https://t.me/+79101364424">
            Телеграм🔗
          </a>
        </div>
        <div>
          <b>Юлия: </b>
          <a className="accordion-link" target="_blank" href="https://vk.com/id17502407">
            ВКонтакте🔗
          </a>
        </div>
        <span>
          🌟 Больше информации о котиках и нашем приюте вы можете найти{" "}
          <a className="accordion-link" target="_blank" href="https://vk.com/prosto__koshki">
            в нашей группе VK
          </a>{" "}
          или{" "}
          <a className="accordion-link" target="_blank" href="https://instagram.com/prosto_koshki?igshid=MzRlODBiNWFlZA==">
            в нашем Instagram аккаунте!
          </a>
        </span>
      </AccordionDetails>
    </Accordion>
  )
}
