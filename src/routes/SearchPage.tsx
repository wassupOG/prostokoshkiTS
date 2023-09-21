import { useEffect, useState } from "react"
import Gallery from "../components/Gallery"
import ToggleSearch from "../components/ToggleSearch"
import NotFoundGallery from "../components/ErrorComponents/NotFoundGallery"
import Profile from "../components/ProfileComponents/Profile"
import Filters from "../components/Filters"
import NotFoundProfile from "../components/ErrorComponents/NotFoundProfile"
import { SearchPageStore } from "../stores/SearchPageStore"

export default function SearchPage() {
  // ! Zustand
  const { input, filterOptions, displayedArrayType } = SearchPageStore()
  // * State management
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
        <Profile {...{ handleFavCats, favCats, filteredArray }} />
        <div className="flex-column-center">
          <ToggleSearch />
          <Filters {...{ favCats }} />
        </div>
        <Gallery {...{ handleFavCats, favCats, filteredArray }} />
      </>
    )
  } else {
    return (
      <>
        <NotFoundProfile />
        <div className="flex-column-center mb-20">
          <ToggleSearch />
          <Filters {...{ favCats, filterOptions }} />
        </div>
        <NotFoundGallery />
      </>
    )
  }
}
