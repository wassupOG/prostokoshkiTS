import { IconButton, Tooltip } from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { GalleryProps } from "../helpers/interfaces"

export default function Gallery({ handleFavCats, favCats, filteredArray, setIndex, index }: GalleryProps) {
  return (
    <div className="cats-gallery-flex-row line-divider">
      {filteredArray.map((cat, catIndex) => (
        <div key={cat.id} onClick={() => setIndex(catIndex)} className="galleryImage-container">
          <HeartIconGallery isFavorite={favCats.includes(cat.img)} onClick={() => handleFavCats(filteredArray[catIndex].img)} />
          <img
            className={`gallery-picture ${catIndex === index ? "active-cat" : ""}`}
            src={`${filteredArray[0].category === "S" ? "/images/searching/" : "/images/found_home/"}${cat.img}.jpg`}
            alt={cat.name}
          />
          <span className="cat-name-capture">{cat.name}</span>
        </div>
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
