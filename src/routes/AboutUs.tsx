import { Paper, Stack, useTheme } from "@mui/material"
import Carousel from "../components/AboutUs/Carousel"
import ShelterFacts from "../components/AboutUs/ShelterFacts"
import Citation from "../components/AboutUs/Citation"
import { RouterLink } from "../themes/styledComponents"

export interface photoArray {
  label: string
  path: string
}

const guests: photoArray[] = [
  {
    label: "Наши гости навещают котиков",
    path: "/images/about_page/guests/guests0.jpg",
  },
  {
    label: "Наши гости навещают котиков",
    path: "/images/about_page/guests/guests1.jpg",
  },
  {
    label: "Наши гости навещают котиков",
    path: "/images/about_page/guests/guests2.jpg",
  },
  {
    label: "Наши гости навещают котиков",
    path: "/images/about_page/guests/guests3.jpg",
  },
  {
    label: "Наши гости навещают котиков",
    path: "/images/about_page/guests/guests4.jpg",
  },
  {
    label: "Наши гости навещают котиков",
    path: "/images/about_page/guests/guests5.jpg",
  },
  {
    label: "Наши гости навещают котиков",
    path: "/images/about_page/guests/guests6.jpg",
  },
  {
    label: "Наши гости навещают котиков",
    path: "/images/about_page/guests/guests7.jpg",
  },
  {
    label: "Наши гости навещают котиков",
    path: "/images/about_page/guests/guests8.jpg",
  },
]

const cats: photoArray[] = [
  {
    label: "Котики ждут вас в гости",
    path: "/images/about_page/cats/cats0.jpg",
  },
  {
    label: "Котики дождались гостей",
    path: "/images/about_page/cats/cats5.jpg",
  },
  {
    label: "Котики принимают подарки",
    path: "/images/about_page/cats/cats2.jpg",
  },
  {
    label: "Котики на обеде",
    path: "/images/about_page/cats/cats1.jpg",
  },
  {
    label: "Котики-акробаты!",
    path: "/images/about_page/cats/cats3.jpg",
  },
  {
    label: "Котики играют",
    path: "/images/about_page/cats/cats4.jpg",
  },
  {
    label: "Ну и конечно...котики отдыхают!",
    path: "/images/about_page/cats/cats6.jpg",
  },
]

const founders: photoArray[] = [
  {
    label: "Создательницы приюта",
    path: "/images/about_page/founders/founders0.jpg",
  },
  {
    label: "Карина - одна из создательниц приюта",
    path: "/images/about_page/founders/founders1.jpg",
  },
  {
    label: "Юлия - одна из создательниц приюта",
    path: "/images/about_page/founders/founders2.jpg",
  },
  {
    label: "Карина и Юлия",
    path: "/images/about_page/founders/founders3.jpg",
  },
]

export default function AboutUs() {
  const theme = useTheme()
  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
          <p>
            <span style={{ color: theme.palette.secondary.main }} className="brand-name">
              Просто кошки
            </span>{" "}
            - это приют, созданный для того, чтобы помочь как можно большему количеству бездомных животных.
          </p>
          <p>
            Вся наша деятельность направлена на то, чтобы кошки, скитающиеся по улицам, живущие в подвалах, голодающие и страдающие от холода обрели свой дом, в
            котором они будут окружены заботой и любовью.
          </p>
          <p>К сожалению, мы не всесильны, но очень хотим помочь бездомышам стать счастливыми домашними любимцами.</p>
        </Paper>

        <Carousel array={guests} />
      </Stack>

      <ShelterFacts />

      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2, md: 4 }}>
        <Carousel array={cats} />

        <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
          <p>
            Наш приют существует благодаря поддержке неравнодушных людей, и мы будем очень благодарны за любую помощь. По вопросам помощи можно{" "}
            <RouterLink to="/contacts">написать нам</RouterLink> или посмотреть информацию <RouterLink to="/help">здесь</RouterLink>. Безусловно,{" "}
            <strong>самая лучшая помощь – это взять котика к себе, подарить ему дом, семью и любовь.</strong>
          </p>
          <p>
            Наши подопечные окружены заботой и любовью, но ни один, даже самый хороший приют не сможет дать настоящего домашнего тепла. А вы, забирая кошку из
            приюта, дарите счастье не только ей, но и себе.
          </p>
        </Paper>
      </Stack>

      <Stack sx={{ mt: 3 }} direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Citation />
        <Carousel array={founders} />
      </Stack>
    </>
  )
}
