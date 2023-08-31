import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, accordionClasses } from "@mui/joy"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { IconButton, Tooltip } from "@mui/material"

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
        <IconButton onClick={onClick}>
          {isFavorite ? <FavoriteIcon className="fav-icon" fontSize="large" /> : <FavoriteBorderIcon className="def-icon" fontSize="large" />}
        </IconButton>
      </Tooltip>
    </div>
  )
}

export function NavigationArrows({ disableLeftArrow, disableRightArrow, prevCat, nextCat }: NavigationArrowsProps) {
  return (
    <>
      <div className="arrow-left">
        <IconButton disabled={disableLeftArrow} onClick={prevCat} color="secondary">
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      <div className="arrow-right">
        <IconButton disabled={disableRightArrow} onClick={nextCat} color="secondary">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </>
  )
}

export function GetCatHomeAccordion() {
  return (
    <AccordionGroup
      sx={{
        maxWidth: "100%",
        [`& .${accordionClasses.root}`]: {
          marginTop: "0.5rem",
          transition: "0.2s ease",
          '& button:not([aria-expanded="true"])': {
            transition: "0.2s ease",
            paddingBottom: "0.625rem",
          },
          "& button": {
            color: "#999",
          },
          "& button:hover": {
            color: "#111",
            background: "#f6b3ffd8",
          },
        },
        [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
          "& button": {
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            color: "#111",
          },
          bgcolor: "background.level1",
          borderRadius: "md",
          borderBottom: "1px solid",
        },
        '& [aria-expanded="true"]': {
          boxShadow: (theme) => `inset 0 -1px 0 ${theme.vars.palette.divider}`,
        },
      }}>
      <Accordion>
        <AccordionSummary>🐱🏠 По вопросам укотовления</AccordionSummary>
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
    </AccordionGroup>
  )
}

export function CatPosition({ index, arrayLength }: CatPositionProps) {
  return <div className="flex-column-center mt-20">{`${index + 1} / ${arrayLength}`}</div>
}
