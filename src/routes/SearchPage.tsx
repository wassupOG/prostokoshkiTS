import { ChangeEvent, useEffect, useState } from "react"
import { SearchingCats } from "../helpers/data"
import Gallery from "../components/Gallery"
import ToggleSearch from "../components/ToggleSearch"
import NotFoundGallery from "../components/ErrorComponents/NotFoundGallery"
import Profile from "../components/ProfileComponents/Profile"
import Filters from "../components/Filters"
import { CatsInterface, FilterOptions } from "../helpers/interfaces"
import NotFoundProfile from "../components/ErrorComponents/NotFoundProfile"

export default function SearchPage() {
  // * State management
  const [toggles, setToggles] = useState<string[]>([])
  const [index, setIndex] = useState<number>(0)
  const [input, setInput] = useState<string>("")
  const [displayedArrayType, setDisplayedArrayType] = useState<CatsInterface[]>(SearchingCats)
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    favOnly: false,
    male: false,
    female: false,
  })
  const [favCats, setFavCats] = useState<string[]>(() => {
    const storageFavCats = localStorage.getItem("favCats")
    if (storageFavCats === null) return []
    return JSON.parse(storageFavCats)
  })

  // * Effects
  useEffect(() => {
    localStorage.setItem("favCats", JSON.stringify(favCats))
  }, [favCats])

  // * Filtering logic
  const filteredArray = displayedArrayType.filter(
    (cat) =>
      cat.name.toLowerCase().includes(input.toLowerCase()) &&
      (!filterOptions.favOnly || favCats.includes(cat.img)) &&
      ((!filterOptions.male && !filterOptions.female) || (filterOptions.male && cat.gender.includes("M")) || (filterOptions.female && cat.gender.includes("F")))
  )

  // * Handling input change
  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    setIndex(0)
    setInput(e.target.value)
  }

  // * Handle adding & removing cats to fav list
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
        <Profile {...{ setIndex, handleFavCats, favCats, index, filteredArray }} />
        <div className="flex-column-center">
          <ToggleSearch {...{ setToggles, setFilterOptions, setDisplayedArrayType, handleInput, input, setIndex, setInput }} />
          <Filters {...{ toggles, setToggles, setIndex, favCats, setFilterOptions, filterOptions }} />
        </div>
        <Gallery {...{ handleFavCats, favCats, filteredArray, setIndex, index }} />
      </>
    )
  } else {
    return (
      <>
        <NotFoundProfile />
        <div className="flex-column-center mb-20">
          <ToggleSearch {...{ setToggles, setFilterOptions, setDisplayedArrayType, handleInput, input, setIndex, setInput }} />
          <Filters {...{ toggles, setToggles, setIndex, favCats, setFilterOptions, filterOptions }} />
        </div>
        <NotFoundGallery />
      </>
    )
  }
}
