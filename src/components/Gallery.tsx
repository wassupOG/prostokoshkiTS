import { GalleryProps } from "../helpers/interfaces"
import { IconButton, Tooltip } from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"

export default function Gallery({ handleFavCats, favCats, filteredArray, setIndex, index }: GalleryProps) {
  // * Initialize heading as null in case filteredArray is empty
  const galleryContent = filteredArray.map((cat, catIndex) => {
    let heartIcon
    if (favCats.includes(cat.img)) {
      heartIcon = (
        <div className="fav-icon-gallery ">
          <Tooltip title="Убрать из избранного">
            <IconButton onClick={() => handleFavCats(filteredArray[catIndex].img)}>
              <FavoriteIcon className="fav-icon" />
            </IconButton>
          </Tooltip>
        </div>
      )
    } else {
      heartIcon = (
        <div className="fav-icon-gallery ">
          <Tooltip title="Добавить в избранное">
            <IconButton onClick={() => handleFavCats(filteredArray[catIndex].img)}>
              <FavoriteBorderIcon className="def-icon" />
            </IconButton>
          </Tooltip>
        </div>
      )
    }
    return (
      <div key={cat.id} onClick={() => setIndex(catIndex)} className="galleryImage-container">
        {heartIcon}
        <img
          className={`gallery-picture ${catIndex === index ? "active-cat" : ""}`}
          src={`${filteredArray[0].category === "S" ? "/images/searching/" : "/images/found_home/"}${cat.img}.jpg`}
          alt={cat.name}
        />
        <span className="cat-name-capture">{cat.name}</span>
      </div>
    )
  })
  return (
    <>
      <div className="cats-gallery-flex-row line-divider">{galleryContent}</div>
    </>
  )
}
