import { ChangeEvent, useState } from "react"
import { Tab, Tabs } from "@mui/material"
import { HomeCats, SearchingCats } from "../helpers/data"
import { SearchPageStore } from "../stores/SearchPageStore"
import { CustomInput } from "../themes/styledComponents"

export default function ToggleSearch() {
  // ! Zustand
  const { setToggles, setIndex, input, setInput, setFilterOptions, setDisplayedArrayType, galleryType, setGalleryType } = SearchPageStore()
  // * State
  const [catsType, setCatsType] = useState(galleryType)

  function handleInput(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setIndex(0)
    setInput(e.target.value)
  }

  function handleGalleryToggle(_e: React.SyntheticEvent<Element, Event>, newValue: string) {
    setFilterOptions({
      favOnly: false,
      male: false,
      female: false,
    })
    setIndex(0)
    setInput("")
    setGalleryType(newValue)
    setCatsType(catsType === "Ищут" ? "Дома" : "Ищут")
    catsType === "Ищут" ? setDisplayedArrayType(HomeCats) : setDisplayedArrayType(SearchingCats)
    setToggles([])
  }

  return (
    <div className="flex-row mt-10 mb-10">
      <Tabs value={galleryType} onChange={handleGalleryToggle} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
        <Tab value="Ищут" label="Ищут дом" />
        <Tab value="Дома" label="Дома" />
      </Tabs>
      <CustomInput autoComplete="off" value={input} onChange={(e) => handleInput(e)} placeholder="Поиск..." variant="outlined" />
    </div>
  )
}
