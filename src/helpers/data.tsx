// * M - male, F - female, B - both (for two & more cats like Motya & Yana)
type CatGender = "M" | "F" | "MF"

export interface ToggleSearchProps {
  setDisplayedArrayType: React.Dispatch<React.SetStateAction<CatsInterface[]>>
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void // Include this if handleInput is also a prop
  input: string // Include this if input is also a prop
  setIndex: React.Dispatch<React.SetStateAction<number>>
  setInput: React.Dispatch<React.SetStateAction<string>>
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
  setToggles: React.Dispatch<React.SetStateAction<string[]>>
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
}

export interface FilterProps {
  filterOptions: FilterOptions
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
  favCats: string[]
  setIndex: React.Dispatch<React.SetStateAction<number>>
  toggles: string[]
  setToggles: React.Dispatch<React.SetStateAction<string[]>>
  filteredArray: CatsInterface[]
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

export const SearchingCats: CatsInterface[] = [
  {
    category: "S",
    id: crypto.randomUUID(),
    name: "Мотя и Яна",
    age: "2-3 года",
    trueAge: 3,
    gender: "MF",
    sterelized: true,
    bio: "Тихая и спокойная парочка. Брать только вместе.",
    basics: "Привиты и стерилизованы / Приучены к лотку",
    img: "мотя_яна",
    vk: "https://vk.com/prosto__koshki?z=photo-212806052_457240440%2Falbum-212806052_283766290",
  },
  {
    category: "S",
    id: crypto.randomUUID(),
    name: "Марся",
    age: "7 месяцев",
    trueAge: 0.7,
    gender: "F",
    sterelized: true,
    bio: "Ласковая кошечка, немного робкая.",
    basics: "Привита и обработана / Приучена к лотку",
    img: "марся",
    vk: "https://vk.com/prosto__koshki?z=photo-212806052_457240840%2Falbum-212806052_283766290",
  },
  {
    category: "S",
    id: crypto.randomUUID(),
    name: "Маняша",
    age: "2 года",
    trueAge: 2,
    gender: "F",
    sterelized: true,
    bio: "Ласковая, спокойная кошечка.",
    basics: "Привита и обработана / Приучена к лотку / Стерилизована",
    img: "маняша",
    vk: "https://vk.com/prosto__koshki?z=photo-212806052_457240224%2Falbum-212806052_283766290",
  },
  {
    category: "S",
    id: crypto.randomUUID(),
    name: "Ватсон",
    age: "5 лет",
    trueAge: 5,
    gender: "M",
    sterelized: true,
    bio: "Ласковый и общительный кот!",
    basics: "Обработан / Привит / Приучен к лотку / Кастрирован",
    img: "ватсон",
    vk: "https://vk.com/album-212806052_295647785",
  },
  {
    category: "S",
    id: crypto.randomUUID(),
    name: "Ники",
    age: "2 года",
    trueAge: 2,
    gender: "F",
    sterelized: true,
    bio: "Ласковая, спокойная и скромная кошечка.",
    basics: "Привита и обработана / Приучена к лотку / Стерилизована",
    img: "ники",
    vk: "https://vk.com/photo-212806052_457245958",
  },
  {
    category: "S",
    id: crypto.randomUUID(),
    name: "Фая",
    age: "4 месяца",
    trueAge: 0.4,
    gender: "F",
    sterelized: false,
    bio: "Ласковая, спокойная и скромная кошечка.",
    basics: "Привита и обработана / Приучена к лотку",
    img: "фая",
    vk: "https://vk.com/photo-212806052_457245509",
  },
  {
    category: "S",
    id: crypto.randomUUID(),
    name: "Наташа",
    age: "2 года",
    trueAge: 2,
    gender: "F",
    sterelized: true,
    bio: "Ласковая и спокойная.",
    basics: "Привита и обработана / Приучена к лотку / Стерилизована",
    img: "наташа",
    vk: "https://vk.com/photo-212806052_457245845",
  },
  {
    category: "S",
    id: crypto.randomUUID(),
    name: "Рики",
    age: "2 года",
    trueAge: 2,
    gender: "F",
    sterelized: true,
    bio: "Ласковая и скромная.",
    basics: "Привита и обработана / Приучена к лотку / Стерилизована",
    img: "рики",
    vk: "https://vk.com/photo-212806052_457245963",
  },
  {
    category: "S",
    id: crypto.randomUUID(),
    name: "Лапкин-Шляпкин",
    age: "5 лет",
    trueAge: 5,
    gender: "M",
    sterelized: true,
    bio: "Спокойный котик.",
    basics: "Обработан / Привит / Приучен к лотку / Кастрирован",
    img: "лапкин-шляпкин",
    vk: "https://vk.com/photo-212806052_457245947",
  },
  {
    category: "S",
    id: crypto.randomUUID(),
    name: "Лелик",
    age: "2-3 года",
    trueAge: 2,
    gender: "M",
    sterelized: true,
    bio: "Спокойный и ласковый котик.",
    basics: "Обработан / Привит / Приучен к лотку / Кастрирован",
    img: "лелик",
    vk: "https://vk.com/photo-212806052_457245189",
  },
]

export const HomeCats: CatsInterface[] = [
  {
    category: "H",
    id: crypto.randomUUID(),
    name: "Тоша",
    gender: "M",
    bio: "Тошу забрали домой Юля и Илья в сентябре 2021. С тех пор он живёт счастливой домашней жизнью.",
    img: "тоша",
  },
  {
    category: "H",
    id: crypto.randomUUID(),
    name: "Сабрина",
    gender: "F",
    bio: "Во время жизни в приюте Сабрина дружила с Тошей. Однако, их пути разошлись в сентябре 2021 года, когда Тошу забрали домой Юля и Илья. Но в этом мире не без чудес! В январе 2022 года Тоша и Сабрина воссоединились - её забрали домой к её другу Тоше!",
    img: "сабрина",
  },
]
