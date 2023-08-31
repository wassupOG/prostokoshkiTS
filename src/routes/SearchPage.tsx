import { ChangeEvent, useEffect, useState } from "react"
import { SearchingCats, CatsInterface } from "../helpers/data"
import Gallery from "../components/Gallery"
import ToggleSearch from "../components/ToggleSearch"
import NotFoundGallery from "../components/NotFoundGallery"
import Profile from "../components/Profile"
import NotFoundProfile from "../components/NotFoundProfile"
import Filters from "../components/Filters"

export default function SearchPage() {
  const [toggles, setToggles] = useState(() => [])
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState("")
  const [displayedArrayType, setDisplayedArrayType] = useState<CatsInterface[]>(SearchingCats)
  const [filterOptions, setFilterOptions] = useState({
    favOnly: false,
    male: false,
    female: false,
  })
  const [favCats, setFavCats] = useState(() => {
    const storageFavCats = localStorage.getItem("favCats")
    if (storageFavCats === null) return []
    return JSON.parse(storageFavCats)
  })
  useEffect(() => {
    localStorage.setItem("favCats", JSON.stringify(favCats))
  }, [favCats])
  // * States End

  // * Filter passed cats array
  const filteredArray = displayedArrayType.filter(
    (cat) =>
      cat.name.toLowerCase().includes(input.toLowerCase()) &&
      (!filterOptions.favOnly || favCats.includes(cat.img)) &&
      ((!filterOptions.male && !filterOptions.female) || (filterOptions.male && cat.gender.includes("M")) || (filterOptions.female && cat.gender.includes("F")))
  )

  // * Handle input change
  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    setIndex(0)
    setInput(e.target.value)
  }

  // * Handle fav cats
  function handleFavCats(catImgName: string): void {
    if (favCats.includes(catImgName)) {
      setFavCats(favCats.filter((favCat: string) => favCat !== catImgName))
    } else {
      setFavCats([...favCats, catImgName])
    }
  }

  if (filteredArray.length > 0) {
    return (
      <>
        <Profile setIndex={setIndex} handleFavCats={handleFavCats} favCats={favCats} index={index} filteredArray={filteredArray} />
        <div className="flex-column-center">
          <ToggleSearch
            setToggles={setToggles}
            setFilterOptions={setFilterOptions}
            setDisplayedArrayType={setDisplayedArrayType}
            handleInput={handleInput}
            input={input}
            setIndex={setIndex}
            setInput={setInput}
          />
          <Filters
            toggles={toggles}
            setToggles={setToggles}
            setIndex={setIndex}
            favCats={favCats}
            setFilterOptions={setFilterOptions}
            filterOptions={filterOptions}
            filteredArray={filteredArray}
          />
        </div>
        <Gallery handleFavCats={handleFavCats} favCats={favCats} filteredArray={filteredArray} setIndex={setIndex} index={index} />
      </>
    )
  } else {
    return (
      <>
        <NotFoundProfile />
        <div className="flex-column-center mb-20">
          <ToggleSearch
            setToggles={setToggles}
            setFilterOptions={setFilterOptions}
            setDisplayedArrayType={setDisplayedArrayType}
            handleInput={handleInput}
            input={input}
            setIndex={setIndex}
            setInput={setInput}
          />
          <Filters
            toggles={toggles}
            filteredArray={filteredArray}
            setToggles={setToggles}
            setIndex={setIndex}
            favCats={favCats}
            setFilterOptions={setFilterOptions}
            filterOptions={filterOptions}
          />
        </div>
        <NotFoundGallery />
      </>
    )
  }
}
