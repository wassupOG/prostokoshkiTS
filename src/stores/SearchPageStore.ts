import { create } from "zustand"
import { CatsInterface } from "../helpers/interfaces"
import { SearchingCats } from "../helpers/data"

interface FilterOptions {
  favOnly: boolean
  male: boolean
  female: boolean
  [key: string]: boolean
}

interface SearchPageState {
  toggles: string[]
  index: number
  input: string
  filterOptions: FilterOptions
  displayedGallery: CatsInterface[]
  galleryType: string
}

interface SearchPageActions {
  setToggles: (toggles: string[]) => void
  setIndex: (index: number) => void
  setInput: (input: string) => void
  setFilterOptions: (filterOptions: FilterOptions) => void
  setDisplayedArrayType: (displayedArrayType: CatsInterface[]) => void
  setGalleryType: (galleryType: string) => void
}

// ! Setters under the hood
// ! How do destructurers understand what property?

export const SearchPageStore = create<SearchPageState & SearchPageActions>((set) => ({
  // * Toggles
  toggles: [],
  setToggles: (newToggles) => set({ toggles: newToggles }),
  // * Index
  index: 0,
  setIndex: (newIndex) => set({ index: newIndex }),
  // * Input
  input: "",
  setInput: (newInput) => set({ input: newInput }),
  // * Filters
  filterOptions: {
    favOnly: false,
    male: false,
    female: false,
  },
  setFilterOptions: (newFilterOptions) => set({ filterOptions: newFilterOptions }),
  // * Change cats type
  displayedGallery: SearchingCats,
  setDisplayedArrayType: (newGallery) => set({ displayedGallery: newGallery }),
  // * Gallery Type
  galleryType: "Ищут",
  setGalleryType: (newGalleryType) => set({ galleryType: newGalleryType }),
}))
