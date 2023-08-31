import { ToggleButtonGroup } from "@mui/material"
import React from "react"
import { CustomToggleButton } from "../helpers/styling"
import { FilterOptions, FilterProps } from "../helpers/data"

export default function Filters({ toggles, favCats, setToggles, setIndex, setFilterOptions, filterOptions }: FilterProps) {
  let disableFav = false
  if (!favCats.length) {
    disableFav = true
  }
  function handleDevices(_event: React.MouseEvent<HTMLElement>, newToggles: string[]): void {
    const changedKeys: string[] = []

    // Identify which keys to change based on entered and exited toggles
    toggles.forEach((toggle) => {
      if (!newToggles.includes(toggle)) {
        changedKeys.push(toggle)
      }
    })

    newToggles.forEach((toggle) => {
      if (!toggles.includes(toggle)) {
        changedKeys.push(toggle)
      }
    })

    // Apply changes to filterOptions
    const updatedFilterOptions: FilterOptions = { ...filterOptions }
    changedKeys.forEach((key) => {
      updatedFilterOptions[key] = !updatedFilterOptions[key]
    })

    // Update states
    setIndex(0)
    setToggles(newToggles)
    setFilterOptions(updatedFilterOptions)
  }

  return (
    <ToggleButtonGroup value={toggles} color="secondary" onChange={handleDevices} aria-label="device">
      <CustomToggleButton disabled={disableFav} value="favOnly">
        Избранное
      </CustomToggleButton>
      <CustomToggleButton value="male">Мальчик</CustomToggleButton>
      <CustomToggleButton value="female">Девочка</CustomToggleButton>
    </ToggleButtonGroup>
  )
}
