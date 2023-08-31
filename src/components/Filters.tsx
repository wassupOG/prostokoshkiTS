import { ToggleButtonGroup } from "@mui/material"
import React from "react"
import { CustomToggleButton } from "../helpers/styling"
import { FilterOptions, FilterProps } from "../helpers/data"

export default function Filters({ setFilterOptions, filterOptions }: FilterProps) {
  const [devices, setDevices] = React.useState(() => [])
  function handleDevices(_event: React.MouseEvent<HTMLElement>, newDevices: string[]) {
    const changedKeys: string[] = []

    // Identify which keys to change based on entered and exited devices
    devices.forEach((device) => {
      if (!newDevices.includes(device)) {
        changedKeys.push(device)
      }
    })

    newDevices.forEach((device) => {
      if (!devices.includes(device)) {
        changedKeys.push(device)
      }
    })

    // Apply changes to filterOptions
    const updatedFilterOptions: FilterOptions = { ...filterOptions }
    changedKeys.forEach((key) => {
      updatedFilterOptions[key] = !updatedFilterOptions[key]
    })

    // Update states
    setDevices(newDevices)
    setFilterOptions(updatedFilterOptions)
  }

  return (
    <ToggleButtonGroup value={devices} color="secondary" onChange={handleDevices} aria-label="device">
      <CustomToggleButton disabled={true} value="favOnly">
        Избранное
      </CustomToggleButton>
      <CustomToggleButton value="male">Мальчик</CustomToggleButton>
      <CustomToggleButton value="female">Девочка</CustomToggleButton>
    </ToggleButtonGroup>
  )
}
