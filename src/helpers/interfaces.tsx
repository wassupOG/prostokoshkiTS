type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void

export interface ToggleSearchProps {
  setDisplayedArrayType: React.Dispatch<React.SetStateAction<CatsInterface[]>>
  handleInput: InputChangeHandler
  input: string
  setIndex: React.Dispatch<React.SetStateAction<number>>
  setInput: React.Dispatch<React.SetStateAction<string>>
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
  setToggles: React.Dispatch<React.SetStateAction<string[]>>
}

export interface FilterProps {
  filterOptions: FilterOptions
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
  favCats: string[]
  setIndex: React.Dispatch<React.SetStateAction<number>>
  toggles: string[]
  setToggles: React.Dispatch<React.SetStateAction<string[]>>
}

export interface ProfileProps {
  filteredArray: CatsInterface[]
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
  filteredArray: CatsInterface[]
  setIndex: React.Dispatch<React.SetStateAction<number>>
  index: number
  favCats: string[]
  handleFavCats: (catImgName: string) => void
}

// * M - male, F - female, MF - both (for two & more cats like Motya & Yana)
type CatGender = "M" | "F" | "MF"

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
