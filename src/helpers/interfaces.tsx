// * M - male, F - female, B - both (for two & more cats like Motya & Yana)
type CatGender = "M" | "F" | "MF"

export interface ToggleSearchProps {
  setDisplayedArrayType: React.Dispatch<React.SetStateAction<CatsInterface[]>>
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void // Include this if handleInput is also a prop
  input: string // Include this if input is also a prop
  setIndex: React.Dispatch<React.SetStateAction<number>>
  setInput: React.Dispatch<React.SetStateAction<string>>
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
  setToggles: React.Dispatch<React.SetStateAction<never[]>>
}

export interface FilterProps {
  filterOptions: FilterOptions
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
  favCats: string[]
  setIndex: React.Dispatch<React.SetStateAction<number>>
  toggles: never[]
  setToggles: React.Dispatch<React.SetStateAction<never[]>>
}

export interface ProfileProps {
  filteredArray: CatsInterface[] // Define the type here
  index: number
  favCats: string[]
  handleFavCats: (catImgName: string) => void
  setIndex: React.Dispatch<React.SetStateAction<number>>
}

export interface FilterOptions {
  favOnly: boolean
  male: boolean
  female: boolean
  [key: string]: boolean
}

export type GalleryProps = {
  filteredArray: CatsInterface[] // Define the type here
  setIndex: React.Dispatch<React.SetStateAction<number>>
  index: number
  favCats: string[]
  handleFavCats: (catImgName: string) => void
}

export interface CatsInterface {
  category: "S" | "H"
  id: string
  name: string
  age?: string
  trueAge?: number
  gender: CatGender
  sterelized?: boolean
  bio: string
  basics?: string
  img: string
  vk?: string
}
