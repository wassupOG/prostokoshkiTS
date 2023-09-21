export interface FilterProps {
  favCats: string[]
}

export interface ProfileProps {
  filteredArray: CatsInterface[]
  favCats: string[]
  handleFavCats: (catImgName: string) => void
}

export type GalleryProps = {
  filteredArray: CatsInterface[]
  favCats: string[]
  handleFavCats: (catImgName: string) => void
}

export interface FilterOptions {
  favOnly: boolean
  male: boolean
  female: boolean
  [key: string]: boolean
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
