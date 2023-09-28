import { Paper, Stack, Typography, useTheme } from "@mui/material"
import Carousel from "../components/AboutUs/Carousel"
import ShelterFacts from "../components/AboutUs/ShelterFacts"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

export interface photoArray {
  label: string
  path: string
}

const guests: photoArray[] = [
  {
    label: "Создательницы приюта",
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
    label: "Карина - одна из создательниц приюта",
    path: "/images/about_page/guests/guests6.jpg",
  },
  {
    label: "Юлия - одна из создательниц приюта",
    path: "/images/about_page/guests/guests7.jpg",
  },
]

const cats: photoArray[] = [
  {
    label: "Котики ждут вас в гости!",
    path: "/images/about_page/cats/cats2.jpg",
  },
  {
    label: "Котики принимают подарки!",
    path: "/images/about_page/cats/cats3.jpg",
  },
  {
    label: "Котики-акробаты",
    path: "/images/about_page/cats/cats0.jpg",
  },
  {
    label: "Котики на обеде",
    path: "/images/about_page/cats/cats1.jpg",
  },
  {
    label: "Котики всё ещё ждут вас в гости!",
    path: "/images/about_page/cats/cats4.jpg",
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
            Вся наша деятельность направлена на то, чтобы кошки, скитающиеся по улицам, живущие в подвалах, голодающие и страдающие от холода, обрели свой дом,
            в котором они будут окружены заботой и любовью.
          </p>
          <p>Мы не всесильны, к сожалению, но очень хотим помочь бездомышам стать счастливыми домашними любимцами.</p>
        </Paper>
        <div className="flex-row-center">
          <Carousel array={guests} />
        </div>
      </Stack>

      <ShelterFacts />

      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2, md: 4 }}>
        <div className="flex-row-center">
          <Carousel array={cats} />
        </div>
        <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
          <p>
            Наш приют существует благодаря поддержке неравнодушных людей, и мы будем благодарны за любую помощь. По вопросам помощи можно написать нам в ЛС, в
            сообщения группы или посмотреть информацию ниже.
          </p>
          <p>
            Наши подопечные окружены заботой и любовью, но ни один, даже самый хороший, приют не сможет дать настоящего домашнего тепла. А вы, забирая кошку из
            приюта, дарите счастье не только ей, но и себе.
          </p>
        </Paper>
      </Stack>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, mt: 3 }}>
        <Typography textAlign={"center"} variant="h6">
          <FormatQuoteIcon />
          Если у вас есть кошка, вы возвращаетесь не в дом, а домой
          <FormatQuoteIcon />
          <div>- Пэм Браун</div>
        </Typography>
      </Paper>
    </>
  )
}
