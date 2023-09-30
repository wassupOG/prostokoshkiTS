import { IconButton, Tooltip } from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { GalleryProps } from "../helpers/interfaces"
import { SearchPageStore } from "../stores/SearchPageStore"
import { CatGalleryContainer, CatNameGallery } from "../themes/styledComponents"

export default function Gallery({ handleFavCats, favCats, filteredArray }: GalleryProps) {
  const { index, setIndex } = SearchPageStore()
  const category = filteredArray[0].category === "S" ? "/images/searching/" : "/images/found_home/"
  return (
    <div className="cats-gallery-flex-row line-divider">
      {filteredArray.map((cat, catIndex) => (
        <CatGalleryContainer key={cat.id} onClick={() => setIndex(catIndex)}>
          <HeartIconGallery isFavorite={favCats.includes(cat.img)} onClick={() => handleFavCats(filteredArray[catIndex].img)} />
          <img className={`gallery-picture ${catIndex === index ? "active-cat" : ""}`} src={`${category + cat.img}.jpg`} alt={cat.name} loading="lazy" />
          <CatNameGallery>{cat.name}</CatNameGallery>
        </CatGalleryContainer>
      ))}
    </div>
  )
}

interface HeartIconGalleryProps {
  isFavorite: boolean
  onClick: () => void
}

function HeartIconGallery({ isFavorite, onClick }: HeartIconGalleryProps) {
  return (
    <div className="fav-icon-gallery">
      <Tooltip title={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}>
        <IconButton onClick={onClick}>{isFavorite ? <FavoriteIcon className="fav-icon" /> : <FavoriteBorderIcon className="def-icon" />}</IconButton>
      </Tooltip>
    </div>
  )
}
