import { ToggleButtonGroup } from "@mui/material"
import React from "react"
import { CustomToggleButton } from "../helpers/styling"
import { FilterOptions, FilterProps } from "../helpers/interfaces"

export default function Filters({ toggles, favCats, setToggles, setIndex, setFilterOptions, filterOptions }: FilterProps) {
  const disableFav = favCats.length === 0

  function handleFilters(_event: React.MouseEvent<HTMLElement>, newToggles: string[]): void {
    let changedKey: string = ""
    // * If a toggle from newToggles isn't in incoming toggles this key has to be changed to true since it has been added
    newToggles.forEach((newToggle: string) => {
      if (!toggles.includes(newToggle)) {
        changedKey = newToggle
      }
    })

    // * If a toggle from toggles isn't in newToggles - this key has to be changed to false since it has been removed
    toggles.forEach((incomingToggle: string) => {
      if (!newToggles.includes(incomingToggle)) {
        changedKey = incomingToggle
      }
    })

    // * Apply changes to filterOptions. We reverse all keys present in changedKeys
    const updatedFilterOptions: FilterOptions = { ...filterOptions }
    updatedFilterOptions[changedKey] = !updatedFilterOptions[changedKey]

    // Update states
    setIndex(0)
    setToggles(newToggles)
    setFilterOptions(updatedFilterOptions)
  }

  return (
    <ToggleButtonGroup value={toggles} color="secondary" onChange={handleFilters} aria-label="device">
      <CustomToggleButton disabled={disableFav} value="favOnly">
        Избранное
      </CustomToggleButton>
      <CustomToggleButton value="male">Мальчик</CustomToggleButton>
      <CustomToggleButton value="female">Девочка</CustomToggleButton>
    </ToggleButtonGroup>
  )
}
