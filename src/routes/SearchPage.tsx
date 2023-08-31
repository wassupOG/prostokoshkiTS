import { useState } from "react"
import { SearchingCats, CatsInterface } from "../helpers/data"
import Gallery from "../components/Gallery"
import ToggleSearch from "../components/ToggleSearch"
import NotFoundGallery from "../components/NotFoundGallery"
import Profile from "../components/Profile"
import NotFoundProfile from "../components/NotFoundProfile"
import Filters from "../components/Filters"

export default function SearchPage() {
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState("")
  const [displayedArrayType, setDisplayedArrayType] = useState<CatsInterface[]>(SearchingCats)
  const [filterOptions, setFilterOptions] = useState({
    favOnly: false,
    male: false,
    female: false,
  })

  const filteredArray = displayedArrayType.filter(
    (cat) =>
      cat.name.toLowerCase().includes(input.toLowerCase()) &&
      ((!filterOptions.male && !filterOptions.female) || (filterOptions.male && cat.gender.includes("M")) || (filterOptions.female && cat.gender.includes("F")))
  )

  function handleInput(e) {
    setIndex(0)
    setInput(e.target.value)
  }

  if (filteredArray.length > 0) {
    return (
      <>
        <Profile index={index} filteredArray={filteredArray} />
        <div className="flex-column-center">
          <ToggleSearch setDisplayedArrayType={setDisplayedArrayType} handleInput={handleInput} input={input} setIndex={setIndex} setInput={setInput} />
          <Filters setFilterOptions={setFilterOptions} filterOptions={filterOptions} />
        </div>
        <Gallery filteredArray={filteredArray} setIndex={setIndex} index={index} />
      </>
    )
  } else {
    return (
      <>
        <NotFoundProfile />
        <div className="flex-column-center mb-20">
          <ToggleSearch setDisplayedArrayType={setDisplayedArrayType} handleInput={handleInput} input={input} setIndex={setIndex} setInput={setInput} />
          <Filters setFilterOptions={setFilterOptions} filterOptions={filterOptions} />
        </div>
        <NotFoundGallery />
      </>
    )
  }
}
