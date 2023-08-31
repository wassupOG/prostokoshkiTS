import { Tabs } from "@mui/material"
import { HomeCats, SearchingCats } from "../helpers/data"
import * as React from "react"
import { CustomInput, CustomTabButton } from "../helpers/styling"
import { ToggleSearchProps } from "../helpers/interfaces"

export default function ToggleSearch({ setToggles, setFilterOptions, setInput, setDisplayedArrayType, handleInput, setIndex, input }: ToggleSearchProps) {
  const [catsType, setCatsType] = React.useState(true)
  const [galleryType, setGalleryType] = React.useState("Ищут")

  function handleChange(_event: React.SyntheticEvent<Element, Event>, newValue: string) {
    setFilterOptions({
      favOnly: false,
      male: false,
      female: false,
    })
    setIndex(0)
    setInput("")
    setGalleryType(newValue)
    catsType ? setDisplayedArrayType(HomeCats) : setDisplayedArrayType(SearchingCats)
    setCatsType(!catsType)
    setToggles([])
  }

  return (
    <div className="flex-row mt-10 mb-10">
      <Tabs value={galleryType} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
        <CustomTabButton value="Ищут" label="Ищут дом" />
        <CustomTabButton value="Дома" label="Дома" />
      </Tabs>
      <CustomInput autoComplete="off" value={input} onChange={(e) => handleInput(e)} placeholder="Поиск..." variant="outlined" size="lg" />
    </div>
  )
}
