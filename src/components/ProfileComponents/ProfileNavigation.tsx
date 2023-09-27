import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionDetails, AccordionSummary, IconButton, Link, Tooltip, Typography } from "@mui/material"

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
    <div className="mt-20">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>🐱🏠 По вопросам укотовления</Typography>
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
            </Link>{" "}
            | +79101364424
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
            </Link>{" "}
            | +79307008009
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
            </Link>{" "}
            | +79040620220
          </div>
          <div style={{ marginTop: 8 }}>
            🌟 Больше информации о котиках и нашем приюте вы можете найти{" "}
            <Link target="_blank" href="https://vk.com/prosto__koshki">
              в нашей группе VK
            </Link>{" "}
            или{" "}
            <Link target="_blank" href="https://instagram.com/prosto_koshki?igshid=MzRlODBiNWFlZA==">
              в нашем Instagram аккаунте!
            </Link>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
