import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from "@mui/material"

export default function HowToHelp() {
  return (
    <>
      <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
        <div className="points">
          <div>
            Мы знаем, что вокруг нас много хороших и добрых людей, которые с радостью могли и хотели бы оказать посильную помощь кошечкам, временно живущим у
            нас. Безусловно,
            <strong>самая лучшая помощь – это взять котика к себе, подарить ему дом, семью и любовь.</strong> Но не у всех есть такая возможность. А у кого-то
            уже живут котишки.
          </div>
          <div>🟣 Итак, мы с радостью примем всё, что вы посчитаете нужным отдать котишкам, и что может им пригодиться.</div>
        </div>
      </Paper>

      <div className="mt-20">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>✅ Корм, наполнитель, обработка</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              💟 Корм. Это самое необходимое, в чем мы нуждаемся. Корма нужны всегда сухие и влажные, подходят паштеты. Что касается марки, то мы стараемся не
              кормить наших кошек кормами низкого качества, но принимаем любые корма. Сейчас мы остановились на сухом корме марки "Мираторг".
            </div>
            <div>💟 Наполнитель. Подходит любой: древесный, комкующийся и т.д.</div>

            <div>💟 Обработки от внешних и внутренних паразитов</div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>🚑 Лекарства, медицина</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              💟 Всегда нужны лекарства: юнидокс солютаб, фосфалюгель, энтерозоо (вет аптека), энтеросгель, энтерофурил, тетрациклиновая глазная мазь,
              хлоргексидин, аугментин, амоксициллин, азикан (вет аптека), витамин Б12 в ампулах (человеческая аптека). Капли амит и суролан, таблетки синулокс
              или кладакса, суспензия стоп-кокцид (вет аптека), гепатолюкс (вет аптека). Шприцы 20 мл, 10 мл, 2 мл, 1 мл.
            </div>
            <div>
              💟 Вакцины. Мультифел 4
              <br />
              💟 Одноразовые пеленки. Подходят любые размеры
              <br />
              💟 Мисочки, лотки, совочки
              <br />
              💟 Игрушки. Любые, на ваше усмотрение 😊
              <br />
              💟 Расчески, чесалки
              <br />
              💟 Когтеточки, домики, лежанки
              <br />
              💟 Хозяйственные принадлежности: мусорные мешки, тряпки, резиновые перчатки, ватные палочки и ватные диски. Средства для мытья полов, удаления
              запаха и пр.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>🏠 Передержка котиков</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              🟣 Огромную помощь вы окажете, взяв хотя бы одного котика на домашнюю передержку до пристроя! К нам часто приезжают котики, дикие и боязливые или
              очень агрессивно настроенные к другим кошкам. Для таких хвостиков домашняя передержка – это идеальное место, где они могут пройти адаптацию.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>🙏 Финансовая помощь</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              🟣 Помочь можно финансово, перечислив любую сумму на карту <strong>Сбербанка: 4276 1609 9328 4539</strong>, оформленную на{" "}
              <strong>Юлию Игоревну Ж</strong>.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>😸 Помощь во время визита к нам</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              Помощь и подарки можно передать котикам лично в лапки. Многие из них очень общительные, дружелюбные и любят внимание. Поэтому приходите к нам в
              гости! Мы будем рады!
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>📌 Точки сбора помощи</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              Не бывает большой или маленькой помощи! Мы будем благодарны любой посильной помощи! 💜
              <br />
              Так же помощь можно передать в точки сбора помощи, расположенные по адресам:
            </div>

            <div>
              🟪 ул. Новая, д. 32 «Мастеркласс» тел. 8 910 136 44 24
              <br />
              🟪 ул. Ванеева, д. 1а котокафе «Мурзик» тел. 8 910 121 61 50
              <br />
              🟪 б-р Юбилейный, д. 2 «Компьютер-сервис» тел. 8 930 700 80 09
              <br />
              🟪 ул. Кузбасская, 15а тел. 8 930 700 80 09
              <br />
              🟪 ул. Родионова , 192/1, 5 этаж тел. 8 904 062 02 20
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}
