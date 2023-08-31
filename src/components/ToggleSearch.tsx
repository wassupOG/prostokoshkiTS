import { Tabs } from "@mui/material"
import { HomeCats, SearchingCats, ToggleSearchProps } from "../helpers/data"
import * as React from "react"
import { CustomInput, CustomTabButton } from "../helpers/styling"

export default function ToggleSearch({ setInput, setDisplayedArrayType, handleInput, setIndex, input }: ToggleSearchProps) {
  const [catsType, setCatsType] = React.useState(true)
  const [value, setValue] = React.useState("Ищут")

  const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    setIndex(0)
    setInput("")
    setValue(newValue)
    catsType ? setDisplayedArrayType(HomeCats) : setDisplayedArrayType(SearchingCats)
    setCatsType(!catsType)
  }

  return (
    <div className="flex-row mt-10 mb-10">
      <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
        <CustomTabButton value="Ищут" label="Ищут дом" />
        <CustomTabButton value="Дома" label="Дома" />
      </Tabs>
      <CustomInput autoComplete="off" value={input} onChange={(e) => handleInput(e)} placeholder="Поиск..." variant="outlined" size="lg" />
    </div>
  )
}
