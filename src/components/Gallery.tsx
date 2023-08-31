import { GalleryProps } from "../helpers/data"

export default function Gallery({ filteredArray, setIndex, index }: GalleryProps) {
  // * Initialize heading as null in case filteredArray is empty
  const galleryContent = filteredArray.map((cat, catIndex) => {
    return (
      <div key={cat.id} onClick={() => setIndex(catIndex)} className="galleryImage-container">
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
